import json
from Classes import Query, Event, Button
from flask import Flask, render_template, request, send_from_directory, sessions
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

#Render Homepage
@app.route('/')
def index():
    return render_template('index.html')

# Render image API
@app.route('/images', methods=['GET','POST'])
def get_images():
    image_ref = list(request.args)[0]
    return send_from_directory(path=image_ref, directory='FrontEnd/src/assets/images/')

# Render general data  API
@app.route('/api', methods = ["GET", "POST"])
def api():

    #selection_dict transforms user actions into SQL condition key-value pairs
    selection_dict = {
        'clickAll' : {'activity_type':'None', 'activity_semi_type':'None'},
        'clickGame' : {'activity_type':'Game'},
        'clickSports' : {'activity_type':'Sports'},
        'clickParty' : {'activity_type':'Party'},
        'clickOther' : {'activity_type':'Other'},
        'clickDocklands' : {'suburb':'Docklands'},
        'clickBoxHill' : {'suburb':'Box Hill'},
        'clickMelbourne' : {'suburb':'Melbourne'},
        'clickWestMelbourne' : {'suburb':'West Melbourne'},
        'clickRolePlay' : {'activity_semi_type':'Role-Play'},
        'clickBoard' : {'activity_semi_type':'Board'},
        'clickAllLocation' : {'suburb':'None'},
        'clickMorning': {'event_start_time_24hr':'between \'00:00:00\' and \'11:59:59\''},
        'clickAfternoon': {'event_start_time_24hr':'between \'12:00:00\' and \'16:59:59\''},
        'clickEvening': {'event_start_time_24hr':'between \'17:00:00\' and \'23:59:59\''},
        'clickAllTimes': {'event_start_time_24hr':'None'}
    }

    # cursor object to access DB
    cur = mysql.connection.cursor()

    try:
        if list(request.args)[0] == 'refresh':
            Button.clear_clicks()
            return "Filters reset"

        params = list(request.args.items())[0]
        print(params)
        exec(f"b{params[1]}.{params[0]}()")
        print(Button.clicked_dict)
        data = eval(f"b{params[1]}.get_data(cur)")

    except:
        data = Query(cur).static().run()


    # Create Event object as per Yiwen's specification
    data = [Event(row) for row in json.loads(data)]
    return str(data)

@app.route('/init', methods=['GET','POST'])
def init():

    return str(Button.clicked_dict)

@app.route('/test')
def test():
    print(Button.clicked_dict)
    arg = list(request.args)[0]
    print(Button.clicked_dict)
    bAllActivity.click()

    print(Button.clicked_dict)
    return arg


if __name__ == '__main__':
    app.run()
