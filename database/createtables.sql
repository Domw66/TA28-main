CREATE DATABASE ta28;

CREATE TABLE Activities (
    activity_id int NOT NULL PRIMARY KEY,
    activity_name varchar(100),
    activity_description TEXT,
    activity_type varchar(50),
	min_participants int,
	max_participants int,
	activity_duaration_min int
);

CREATE TABLE Locations (
    location_id int NOT NULL PRIMARY KEY,
    location_name varchar(100),
    address_1 varchar(255),
    street varchar(50),
	suburb varchar(50),
	city varchar(50),
	state varchar(50),
	postcode varchar(50),
	business_start_time time,
	business_end_time time,
	latitude decimal(10,8),
	longitude decimal(11,8)
	
);

CREATE TABLE Events (
	event_id int NOT NULL PRIMARY KEY,
	event_name varchar(100),
	activity_id int, 
	location_id int, 
	participants_count int,
	event_duration_min int,
	event_date date,
	event_start_time_24hr time,
	event_end_time_24hr time,
	event_prerequisites varchar(255),
	FOREIGN KEY (activity_id) REFERENCES Activities(activity_id),
	FOREIGN KEY (location_id) REFERENCES Locations(location_id)
);

CREATE TABLE Users (
    user_id int NOT NULL PRIMARY KEY,
	user_name varchar(100),
	user_email varchar(100)
	
);

CREATE TABLE Users_Events (
	user_id int,
	event_id int,
	FOREIGN KEY (user_id) REFERENCES Users(user_id),
	FOREIGN KEY (event_id) REFERENCES Events(event_id),
	PRIMARY KEY (user_id, event_id)	
);



