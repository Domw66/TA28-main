create database ta28;
use  ta28;
CREATE TABLE Charities (
    charity_id int NOT NULL PRIMARY KEY,
    charity_name varchar(255),
    charity_size varchar(100),
    charity_website varchar(512),
	charity_age int
);
select count(*) from charities;
select * from charities where charity_id =  147;
select * from charities where charity_website not regexp '^(https?://|www\\.)[\.A-Za-z0-9\-]+\\.[a-zA-Z]{2,4}';

drop table charities;
delete from charities where charity_id > -1;
select * from Charities;
select max(charity_id) from charities;


delete from charities where charity_id not in (
select distinct charity_id from charities_states
);
delete from charities_services where charity_id not in (
select distinct charity_id from charities_states
);

delete from charities where charity_id = 147;
select * from charities_services where charity_id = 130;


delete from charities where charity_id in (20022, 35063, 35778, 41301, 55585);
delete from charities_states where charity_id in (20022, 35063, 35778, 41301, 55585);
delete from charities_services where charity_id in (20022, 35063, 35778, 41301, 55585);



select * from charities where charity_id not in (
select distinct charity_id from charities_states
);

select * from charities where charity_id not in (
select distinct charity_id from charities_services
);

SET SQL_SAFE_UPDATES = 0;

select count(*) from charities;

