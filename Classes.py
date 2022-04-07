import json
import datetime

class Query:

    default_cols = [
        "a.activity_image_path",
        "e.event_name",
        "e.event_date",
        "e.event_start_time_24hr",
        "e.participants_count",
        "l.suburb"
    ]

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
    def dynamic(self, col_list=default_cols, conds=None):

        # Format column selection
        col_string = ", ".join(Query.default_cols)

        # If conds is a dict, that means extra conditions have been passed and must be formatted.
        if isinstance(conds, dict):
            if len(conds) > 0:
                cond_string = " and " + " and ".join([f"{key}='{value}'" for key, value in conds.items()])
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

    def distinct(self, col):
        self.query = f"SELECT DISTINCT {', '.join(col)} from "
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


class Button:

    clicked_dict = {}

    sql_dict = {
        'AllActivity': {},
        'Game': {'a.activity_type': 'Game'},
        'Sports': {'a.activity_type': 'Sports'},
        'Party': {'a.activity_type': 'Party'},
        'Other': {'a.activity_type': 'Other'},
        'Docklands': {'l.suburb': 'Docklands'},
        'BoxHill': {'l.suburb': 'Box Hill'},
        'Melbourne': {'l.suburb': 'Melbourne'},
        'WestMelbourne': {'l.suburb': 'West Melbourne'},
        'RolePlay': {'a.activity_semi_type': 'Role-Play'},
        'Board': {'a.activity_semi_type': 'Board'},
        'AllLocation': {},
        'Morning': {'e.event_start_time_24hr': 'between \'00:00:00\' and \'11:59:59\''},
        'Afternoon': {'e.event_start_time_24hr': 'between \'12:00:00\' and \'16:59:59\''},
        'Evening': {'e.event_start_time_24hr': 'between \'17:00:00\' and \'23:59:59\''},
        'AllTime': {}
    }

    def __init__(self, name, type):
        self.name = name
        self.clicked = False
        self.type = type
        Button.clicked_dict[self] = self.clicked

    def __repr__(self):
        return self.name

    def click(self):
        self.clear_clicks()
        self.clicked=True
        self.update_click()
        return self

    def clear_clicks(self):
        for key, value in Button.clicked_dict.items():
            if key.type == self.type:
                Button.clicked_dict[key] = False
        return self

    def update_click(self):
        Button.clicked_dict[self] = self.clicked
        return self


    def get_data(self, cur):
        conditions = {}
        [conditions.update(Button.sql_dict[key.name]) for key, value in Button.clicked_dict.items() if value]
        result = Query(cur).dynamic(conds=conditions).run()
        return result




