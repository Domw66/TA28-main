import json
from flask import Flask, render_template, request
from flask_mysqldb import MySQL

app = Flask(__name__)

@app.route('/cardcanvas')
def cardcanvas():
    return render_template("cardcanvas.html")


app.config['MYSQL_HOST'] = 'ta28.mysql.database.azure.com'
app.config['MYSQL_USER'] = 'ta28'
app.config['MYSQL_PASSWORD'] = 'Monash#123'
app.config['MYSQL_DB'] = 'ta28'

mysql = MySQL(app)

@app.route('/')
def index():  # put application's code here
    return render_template('index.html')

@app.route('/events', methods = ["POST", "GET"])
def getEvents():
    print(request.args)
    query = """SELECT e.event_name, a.activity_name, a.activity_type, e.participants_count, 
    l.location_name, l.address_1 
    FROM events e, activities a, locations l 
    where e.activity_id = a.activity_id and e.location_id = l.location_id"""
    for key, value in request.args.items():
        query += f" and {key} in {value.replace('[', '(').replace(']', ')')}"
    query += ";"
    print(query)
    cur = mysql.connection.cursor()
    cur.execute(query)
    data = cur.fetchall()
    cur.close()
    print(json.dumps(data))
    #return params
    return json.dumps(data)

if __name__ == '__main__':
    app.run()
