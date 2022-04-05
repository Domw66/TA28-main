ALTER TABLE Activities
ADD COLUMN activity_semi_type varchar(50) AFTER activity_type;

ALTER TABLE Activities change COLUMN activity_duaration_min activity_duration_min int;

ALTER TABLE Activities
ADD COLUMN activity_image_path varchar(512) AFTER activity_duration_min;

ALTER TABLE Events
ADD COLUMN event_image_path varchar(512) AFTER event_prerequisites;

ALTER TABLE Users
ADD COLUMN user_pwd varchar(100) AFTER user_name;

UPDATE Activities
SET activity_type = 'Game' where activity_id > 1;

UPDATE Activities
SET activity_semi_type = 'Role-play' where activity_id in (101, 102, 103, 104);

UPDATE Activities
SET activity_semi_type = 'Board' where activity_id in (105, 106);

INSERT INTO Activities (activity_id, activity_name, activity_description, activity_type, min_participants, max_participants, activity_duaration_min)
VALUES 
(107, 'Table tennis', '', 'Sports', 2, 4, 60),
(108, 'Badminton', '', 'Sports', 2, 4, 120),
(109, 'Volleyball', '', 'Sports', 6, 12, 45),
(110, 'Cycling', '', 'Sports', 5, 10, 180),
(111, 'Football', '', 'Sports', 6, 9, 45),
(112, 'Chinese BBQ', '', 'Party', 5, 10, 120),
(113, 'Hong Kong dumplings', '', 'Party', 5, 10, 60),
(114, 'Mainland Chow Mein', '', 'Party', 5, 10, 60),
(115, 'Shanghai Flower Dinner', '', 'Party', 5, 10, 60),
(116, 'Yum Cha, Dim Sim, Seafood feast', '', 'Party', 5, 10, 180),
(117, 'See the Exhibition', '', 'Other', 5, 10, 120)
;

INSERT INTO Events (event_id, event_name, activity_id, location_id, participants_count, event_duration_min, event_date, event_start_time_24hr, event_end_time_24hr, event_prerequisites)
VALUES 
(107, 'Table tennis challenge', 107, 101, 3, 180, '2022-04-03', '15:00', '19:00', 'None'),
(108, 'Badminton battles', 108, 102, 2, 120, '2022-04-06', '09:00', '12:00', 'None'),
(109, 'Volleyball warriors', 109, 103, 4, 60, '2022-04-09', '13:00', '14:00', 'None'),
(110, 'Cycling enthusiasts', 110, 104, 5, 240, '2022-04-12', '15:00', '20:00', 'None'),
(111, 'League of Football', 111, 105, 2, 120, '2022-04-14', '10:00', '12:30', 'None'),
(112, 'Dine in with Chinese BBQ', 112, 106, 4, 150, '2022-04-15', '18:00', '22:30', 'None'),
(113, 'Relish the Hong Kong dumplings', 113, 101, 3, 180, '2022-04-03', '15:00', '19:00', 'None'),
(114, 'Savour the Mainland Chow Mein', 114, 102, 2, 120, '2022-04-06', '09:00', '12:00', 'None'),
(115, 'Enjoy the Shanghai Flower Dinner', 115, 103, 4, 60, '2022-04-09', '13:00', '14:00', 'None'),
(116, 'Mighty Yum Cha, Dim Sim, Seafood feast', 116, 104, 5, 240, '2022-04-12', '15:00', '20:00', 'None'),
(117, 'Relive history - Exhibition Expo', 117, 105, 2, 120, '2022-04-14', '10:00', '12:30', 'None')
;