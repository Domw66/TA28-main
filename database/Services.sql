CREATE TABLE Services (
    service_id int NOT NULL PRIMARY KEY,
    service_name varchar(255),
    service_description varchar(512)
);
select count(*) from services;
select * from services;