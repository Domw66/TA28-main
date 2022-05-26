CREATE TABLE Charities_Services (
    charity_id int NOT NULL,
    service_id int NOT NULL,
    FOREIGN KEY (charity_id) REFERENCES Charities(charity_id),
	FOREIGN KEY (service_id) REFERENCES Services(service_id),
	PRIMARY KEY (charity_id, service_id)	
);
delete from Charities_Services where charity_id > -1;
select * from Charities_Services order by charity_id;
INSERT INTO `ta28`.`charities_services`
(`charity_id`,
`service_id`)
VALUES
(3,15);
select count(*) from Charities_Services;
select * from Charities_Services order by charity_id;

CREATE TABLE Charities_Services_1 (
    charity_id int NOT NULL,
    service_id int NOT NULL,
    FOREIGN KEY (charity_id) REFERENCES Charities(charity_id),
	FOREIGN KEY (service_id) REFERENCES Services(service_id),
	PRIMARY KEY (charity_id, service_id)	
);
drop table Charities_Services_1;

select * from Charities_Services where charity_id = 59786;