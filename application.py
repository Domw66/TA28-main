import json
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
def getData():

    key_dict = {
        "event_name" : "e.event_name",
        "activity_name" : "a.activity_name",
        "activity_type" : "a.activity_type",
        "participants_count" : "e.participants_count",
        "location_name" : "l.location_name",
        "address_1" : 'l.address_1'
    }

    def dynamic_query(fields):
        query = """SELECT e.event_name, a.activity_name, a.activity_type, e.participants_count, 
                    l.location_name, l.address_1 
                    FROM events e, activities a, locations l 
                    where e.activity_id = a.activity_id and e.location_id = l.location_id"""
        for key, value in fields.items():
            query += f" and {key_dict[key]} = '{value}'"
        query += ";"
        return query

    ##### Future iterations will have security features here to prevent malicious attack
    # security()

    cur = mysql.connection.cursor()

    params = dict(request.args)
    print(params)
    try:
        if params['init'] == 'activity':
            query = """
                    SELECT DISTINCT a.activity_type
                    FROM activities a; 
                    """
            cur.execute(query)
            return json.dumps(cur.fetchall())

    except KeyError:
        cur.execute(dynamic_query(request.args))
        return json.dumps(cur.fetchall())

    except:
        print('Different error occurred')

if __name__ == '__main__':
    app.run()
