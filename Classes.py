import json
import datetime

class Query:

    key_dict = {
        "event_name": "e.event_name",
        "event_date": "e.event_date",
        "event_start_time": "e.event_start_time_24hr",
        "participants_count": "e.participants_count",
        "event_image_path": "e.event_image_path",
        "activity_name": "a.activity_name",
        "activity_type": "a.activity_type",
        "location_name": "l.location_name",
        "address_1": 'l.address_1',
        "*" : "*"
    }

    static_dict = {
        "cols" : ["event_name", "activity_name", "activity_type", "participants_count", "location_name", "address_1"],
        "conds" : ["e.activity_id = a.activity_id", "e.location_id = l.location_id"],
        "default_cols" : ['event_image_path', 'event_name', 'event_date', 'event_start_time', 'participants_count']
    }

    def __init__(self, cursor):
        self.query = ""
        self.cursor = cursor

    def __str__(self):
        return self.query

    def datetime_converter(self, date):
        if isinstance(date, datetime.date) or isinstance(date, datetime.timedelta):
            return date.__str__()
        else:
            return "placeholder date/time"

    def dynamic(self, col_list=static_dict['default_cols'], conds=None):


        col_string = ", ".join([self.key_dict[x] for x in col_list])

        if isinstance(conds, dict):
            if len(conds) > 0:
                cond_string = " and " + " and ".join([f"{self.key_dict[key]}='{value}'" for key, value in conds.items()])
            else:
                cond_string = ""
        else:
            cond_string = ""

        query = f"SELECT {col_string} " +\
                "FROM events e, activities a, locations l " + \
                f"where {' and '.join(self.static_dict['conds'])}{cond_string};"
        self.query = query
        return self

    def static(self):
        self.dynamic(self.static_dict['cols'], self.static_dict['conds'])
        return self

    def run(self):
        print(self.query)
        self.cursor.execute(self.query)
        return json.dumps(self.cursor.fetchall(), default = self.datetime_converter)

class Event:

    count = 0

    def __init__(self, row_dict):
        self.image_path = str(row_dict['event_image_path'])
        self.date = row_dict['event_date']
        self.time = row_dict['event_start_time_24hr']
        self.name = row_dict['event_name']
        self.attendance = str(row_dict['participants_count'])
        self.position = ""
        Event.count += 1

    def __repr__(self):
        return "{" + f"Event{self.position}: {', '.join(list(self.__dict__.values())[:-1])}" + "}"
