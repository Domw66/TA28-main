CREATE TABLE States (
    state_id int NOT NULL PRIMARY KEY,
    state_name varchar(255)
);
select * from states;
delete from states where state_id > -1;

