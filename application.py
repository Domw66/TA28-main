import json
from Classes import Query, Event
from flask import Flask, render_template, request
from flask_mysqldb import MySQL

app = Flask(__name__)

app.config['MYSQL_HOST'] = 'ta28.mysql.database.azure.com'
app.config['MYSQL_USER'] = 'ta28'
app.config['MYSQL_PASSWORD'] = 'Monash#123'
app.config['MYSQL_DB'] = 'ta28'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

mysql = MySQL(app)

@app.route('/')
def index():  # put application's code here
    return render_template('index.html')

@app.route('/api', methods = ["GET", "POST"])
def api():

    selection_dict = {
        'clickGame' : {'activity_type':'Game'},
        'clickSports' : {'activity_type':'Sports'},
        'clickParty' : {'activity_type':'Party'},
        'clickOther' : {'activity_type':'Other'},
        'clickDocklands' : {'location':'Docklands'},
        'clickBoxHill' : {'location':'Box Hill'},
        'clickMelbourne' : {'location':'Melbourne'},
        'clickWestMelbourne' : {'location':'West Melbourne'},
    }

    difference_dict = {}

    cur = mysql.connection.cursor()

    params = "".join(list(request.args.items())[0])
    for key, value in selection_dict[params].items():
        difference_dict[key] = value
    print(difference_dict)

    result = Query(cur).dynamic(conds=difference_dict)

    data = [Event(row) for row in json.loads(result.run())]
    return str(data)

if __name__ == '__main__':
    app.run()
