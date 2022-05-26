CREATE TABLE Quiz (
    question_id int NOT NULL PRIMARY KEY,
    question_string varchar(1024),
    correct_count int,
    wrong_count int,
    total_participants int
);
insert into Quiz 
(question_id, question_string, correct_count, wrong_count, total_participants)
values 
(1, 'How prepared are you for the disaster?', 0, 0, 0),
(2, 'Do you know the government listed evacuation sites?', 0, 0, 0),
(3, 'Do you know the potential organisations that you could get support from?', 0, 0, 0),
(4, 'Do you know the governmental disater hotline for getting help?', 0, 0, 0),
(5, 'Do you have the live updates of natural disasters?', 0, 0, 0);
insert into Quiz 
(question_id, question_string, correct_count, wrong_count, total_participants)
values 
(1, 'Question 1', 0, 0, 0),
(2, 'Question 2', 0, 0, 0),
(3, 'Question 3', 0, 0, 0),
(4, 'Question 4', 0, 0, 0),
(5, 'Question 5', 0, 0, 0);
select * from quiz;

 show variables like 'character_set_%';

use ta28; 
delete from quiz where question_id >0;