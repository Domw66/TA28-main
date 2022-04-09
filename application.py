import json
import datetime
from json import JSONEncoder
from Classes import Query, Event, Button
from flask import Flask, render_template, request, send_from_directory
from flask_mysqldb import MySQL

# Start App
app = Flask(__name__)

# Input app configs
app.config['MYSQL_HOST'] = 'ta28.mysql.database.azure.com'
app.config['MYSQL_USER'] = 'ta28'
app.config['MYSQL_PASSWORD'] = 'Monash#123'
app.config['MYSQL_DB'] = 'ta28'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

# Start MySQL instance
mysql = MySQL(app)

# difference_dict tracks changes to current filters
difference_dict = {}

# instantiate buttons
button_list = [
    'AllActivity',
    'Game',
    'Sports',
    'Party',
    'Other',
    'AllLocation',
    'Docklands',
    'BoxHill',
    'Melbourne',
    'WestMelbourne',
    'AllTime',
    'Morning',
    'Afternoon',
    'Evening'
]

for i, btn in enumerate(button_list):
    if i < 5:
        exec(f"b{btn} = Button('{btn}', 'activity')")
    if i > 4 and i < 10:
        exec(f"b{btn} = Button('{btn}', 'location')")
    if i > 9:
        exec(f"b{btn} = Button('{btn}', 'time')")

class DateTimeEncoder(JSONEncoder):
        #Override the default method
        def default(self, obj):
            if isinstance(obj, (datetime.date, datetime.datetime, datetime.time)):
                return obj.isoformat()

#Render Homepage
@app.route('/')
def index():
    return render_template('index.html')

# Render image API
@app.route('/images', methods=['GET','POST'])
def get_images():
    image_ref = list(request.args)[0]
    return send_from_directory(path=image_ref, directory='FrontEnd/src/assets/images/')

@app.route('/src', methods=['GET','POST'])
def access_filesystem():
    path = list(request.args)[0]
    print(path)
    return send_from_directory(path=path, directory='FrontEnd/src')

# Render general data  API
@app.route('/api', methods = ["GET", "POST"])
def api():

    # cursor object to access DB
    cur = mysql.connection.cursor()

    # Try/Except block allows blank /api call
    try:
        if list(request.args)[0] == 'refresh':
            Button.clear_clicks()
            return "Filters reset"

        params = list(request.args.items())[0]
        exec(f"b{params[1]}.{params[0]}()")
        data = eval(f"b{params[1]}.get_data(cur)")
    except:
        data = Query(cur).generate_query().run()

    # Create Event object as per Yiwen's specification
    data = [Event(row) for row in json.loads(data)]

    return str(data)

#send all Button information
@app.route('/init')
def init():
    return str(Button.format())

# Render general data  API
@app.route('/filter_page', methods = ["GET", "POST"])
def filter_page():

    # cursor object to access DB
    cur = mysql.connection.cursor()
    input_request = request.args
    query_string_parameters = {}
    mandatory_params = ['Activity_type', 'Location', 'Time', 'PageNum', 'PageSize']
    default_values =  {'Activity_type': 'AllActivity', 'Location': 'AllLocation', 'Time': 'AllTime', 'PageNum' : '1', 'PageSize' : '6'}
    timeDict = {'Morning':'between \'00:00:00\' and \'11:59:59\'', 'Afternoon':'between \'12:00:00\' and \'16:59:59\'', 'Evening':'between \'17:00:00\' and \'23:59:59\''}

    for mandatory_param in mandatory_params:
        if mandatory_param not in input_request:
            query_string_parameters[mandatory_param] = default_values[mandatory_param]
        else:
            query_string_parameters[mandatory_param] = input_request[mandatory_param]    
    print(query_string_parameters)

    page_count_sql = """
    select ceil(count(distinct e.event_image_path, e.event_name, 
    e.event_date, e.event_start_time_24hr, e.participants_count, l.suburb)/{0}) as page_count 
    from events e, locations l, activities a  
    where e.location_id = l.location_id and e.activity_id = a.activity_id {1}; 
    """
    filter_string = ''
    if query_string_parameters['Activity_type'] != default_values['Activity_type']:
        filter_string += f" and a.activity_type = '{query_string_parameters['Activity_type']}'"
    if query_string_parameters['Location'] != default_values['Location']:
        filter_string += f" and l.suburb = '{query_string_parameters['Location']}'"
    if query_string_parameters['Time'] != default_values['Time']:
        filter_string += f" and e.event_start_time_24hr {timeDict[query_string_parameters['Time']]}"    

    page_count_sql = page_count_sql.format(query_string_parameters['PageSize'], filter_string)
    print(page_count_sql)
    cur.execute(page_count_sql)
    row = cur.fetchone()
    total_pages = int(row['page_count'])

    records_sql = """
    select distinct e.event_image_path, e.event_name, 
    e.event_date, e.event_start_time_24hr, e.participants_count, l.suburb 
    from events e, locations l, activities a  
    where e.location_id = l.location_id and e.activity_id = a.activity_id {2} limit {0}, {1}; 
    """
    page_num = int(query_string_parameters['PageNum'])
    page_size = int(query_string_parameters['PageSize'])
    records_sql = records_sql.format((page_num - 1) * page_size, page_num * page_size, filter_string)
    print(records_sql)
    cur.execute(records_sql)

    response_template = { 
        "TotalPage": None, 
        "PageNum": None, 
        "Data": []
    }
    response_template['TotalPage'] = total_pages
    response_template['PageNum'] = page_num
    response_template['Data'] = cur.fetchall()

    return json.dumps(response_template, cls=DateTimeEncoder)

if __name__ == '__main__':
    app.run()
