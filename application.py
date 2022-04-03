import json
from flask import Flask, render_template
from flask_mysqldb import MySQL

app = Flask(__name__)


app.config['MYSQL_HOST'] = 'ta28.mysql.database.azure.com'
app.config['MYSQL_USER'] = 'ta28'
app.config['MYSQL_PASSWORD'] = 'Monash#123'
app.config['MYSQL_DB'] = 'ta28'

mysql = MySQL(app)

@app.route('/')
def index():  # put application's code here
    return render_template('index.html')

@app.route('/events')
def getEvents():
    cur = mysql.connection.cursor()
    cur.execute("""SELECT e.event_name, a.activity_name, a.activity_type, e.participants_count, 
    l.location_name, l.address_1 
    FROM events e, activities a, locations l 
    where e.activity_id = a.activity_id and e.location_id = l.location_id;""")
    data = cur.fetchall()
    cur.close()
    return json.dumps(data)

if __name__ == '__main__':
    app.run()
