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

    selction_dict = {
        'Type': ''
    }


    cur = mysql.connection.cursor()

    params = dict(request.args)
    print(params)

    result = Query(cur).dynamic(conds=params)

    print(result)

    data = [Event(row) for row in json.loads(result.run())]
    return str(data)

if __name__ == '__main__':
    app.run()
