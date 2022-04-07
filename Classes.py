import json
import datetime

class Query:

    # Create class dicts for accessing across all instantiations

    key_dict = {
        "event_name": "e.event_name",
        "event_date": "e.event_date",
        "event_start_time": "e.event_start_time_24hr",
        "participants_count": "e.participants_count",
        "activity_image_path": "a.activity_image_path",
        "activity_name": "a.activity_name",
        "activity_type": "a.activity_type",
        "suburb": "l.suburb",
        "address_1": 'l.address_1',
        "*" : "*",
        "activity_semi_type":'a.activity_semi_type'
    }

    static_dict = {
        "cols" : ["event_name", "activity_name", "activity_type", "participants_count", "location_name", "address_1"],
        "conds" : ["e.activity_id = a.activity_id", "e.location_id = l.location_id"],
        "default_cols" : ['activity_image_path', 'event_name', 'event_date', 'event_start_time', 'participants_count']
    }

    def __init__(self, cursor):
        self.query = ""
        self.cursor = cursor

    def __str__(self):
        return self.query

    # Used when serialisating dates to json
    def datetime_converter(self, date):
        if isinstance(date, datetime.date) or isinstance(date, datetime.timedelta):
            return date.__str__()
        else:
            return "placeholder date/time"

    # Dynamic SQL query with column selection and conditions
    def dynamic(self, col_list=static_dict['default_cols'], conds=None):

        # Format column selection
        col_string = ", ".join([self.key_dict[x] for x in col_list])

        # If conds is a dict, that means extra conditions have been passed and must be formatted.
        if isinstance(conds, dict):
            if len(conds) > 0:
                cond_string = " and " + " and ".join([f"{self.key_dict[key]}='{value}'" for key, value in conds.items()])
            else:
                cond_string = ""
        else:
            cond_string = ""

        # Generate Query in object attributes
        query = f"SELECT {col_string} " +\
                "FROM events e, activities a, locations l " + \
                f"where {' and '.join(self.static_dict['conds'])}{cond_string};"
        self.query = query
        return self

    # wrapper for preset common query
    def static(self):
        self.dynamic(self.static_dict['cols'], self.static_dict['conds'])
        return self

    # Run query, return data
    def run(self):
        self.cursor.execute(self.query)
        return json.dumps(self.cursor.fetchall(), default = self.datetime_converter)

class Event:

    count = 0

    def __init__(self, row_dict):
        for row in row_dict:
            exec(f"self.{row} = str(row_dict['{row}'])")
        #self.time_of_day = self.time_of_day(None)
        self.position = ""
        Event.count += 1

    def __repr__(self):
        return "{" + f"Event{self.position}: {', '.join(list(self.__dict__.values())[:-1])}" + "}"

    def time_of_day(self, time):
        pass
