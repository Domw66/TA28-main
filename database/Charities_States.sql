CREATE TABLE Charities_States (
    charity_id int NOT NULL,
    state_id int NOT NULL,
    FOREIGN KEY (charity_id) REFERENCES Charities(charity_id),
	FOREIGN KEY (state_id) REFERENCES States(state_id),
	PRIMARY KEY (charity_id, state_id)	
);
select count(*) from Charities_States where charity_id < 32783;
select * from Charities_States where charity_id = 59786;
select * from Charities_States order by charity_id;

select distinct charity_id from charities_states;

select * from charities_states where charity_id = 6293;