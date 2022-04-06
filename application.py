import json
from Classes import Query, Event
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

#Render Homepage
@app.route('/')
def index():  # put application's code here
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
        'clickAll' : {'activity_type':'None'},
        'clickGame' : {'activity_type':'Game'},
        'clickSports' : {'activity_type':'Sports'},
        'clickParty' : {'activity_type':'Party'},
        'clickOther' : {'activity_type':'Other'},
        'clickDocklands' : {'suburb':'Docklands'},
        'clickBoxHill' : {'suburb':'Box Hill'},
        'clickMelbourne' : {'suburb':'Melbourne'},
        'clickWestMelbourne' : {'suburb':'West Melbourne'},
        'clickRolePlay  ' : {'activity_semi_type':'Role Play'},
        'clickBoard' : {'activity_semi_type':'Board'},
        'clickAllLocation' : {'suburb':'None'}
    }

    cur = mysql.connection.cursor()

    #try:
    params = "".join(list(request.args.items())[0])
    for key, value in selection_dict[params].items():
        difference_dict.update({key: value})
        if params in ['clickAll', 'clickAllLocation']:
            difference_dict.pop(key)
    #except:
    #    pass

    print(difference_dict)

    result = Query(cur).dynamic(conds=difference_dict)

    print(result)
    print(result.run())
    data = [Event(row) for row in json.loads(result.run())]
    return str(data)

if __name__ == '__main__':
    app.run()
