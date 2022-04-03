INSERT INTO Activities (activity_id, activity_name, activity_description, activity_type, min_participants, max_participants, activity_duaration_min)
VALUES 
(101, 'Mahjong', 'The dealer rolls the dice and counts that many tiles from the right edge of their wall, and separates the wall at that point to begin dealing tiles from the left of that spot and going clockwise. Each player receives 13 tiles, with the dealer starting with an extra 14th tile. Player have to throw a cards when everytime have a new one. 
The goal of the game is player needs consists of getting all 14 of your tiles into four sets (same type with three consecutive numbers like 123, or 3 same tiles with same type) and one pair which is two identical tiles.', 'Card game', 3, 4, 60),
(102, 'Murder mystery game', 'This game are party games with corresponding characters, corresponding costumes and props. One of the partygoers is secretly playing a murderer in-game, while the other attendees must determine who among them is the criminal. In some styles of game, the murderer may be aware that they are the killer and in other games the murderer discovers this along with the other participants.', 'Role-Play game', 4, 9, 60),
(103, 'Werewolves of Miller\'s Hollow', 'The standard vision werewolf contains 12 players. And there should be 4 werewolves, 4 special villagers and 4 ordinary villagers. The 4 special villagers are the Seer, the Witch, the Hunter and the Acient (or the Savior). The game is based on the "kill all the ordinary villagers or all the special villagers " rule.', 'Role-Play game', 8, 18, 60),
(104, 'The Mafia Game', 'There are four game characters in the killing game: Judge, Policeman, Killer, and Civilian. Participants need to mislead others and hide themselves. Everyone has different roles, different positions, different presentations, and observe each other to see who will show off first. In the end, if the police find the hidden killer, the police win; if the killer kills all the police, the killer wins.', 'Role-Play game', 10, 20, 60),
(105, 'Who is the spy (undercover) ?', 'Everyone has a card and doesn’t let other players know what you get. Each wheel can say only one sentence to describe yourself get word (can\'t say the words). Each wheel description is completed, all player will voted for suspected the man undercover, the person with the most number of votes out. At last if there are only 3 players alive, the spy wins. Or, the spy loses.', 'Role-Play game/Card game', 4, 9, 60),
(106, 'Dou dizhu', 'Three people with one pack of cards, including the two differentiated jokers. The game starts with players bidding for the "landlord" (*) position. Those who lose the bid or do not bid enter the game as the "peasants" team competing against the landlord. The objective of the game is to be the first player to have no cards left. The landlord wins by removing all their cards first. The peasants win if one of them removes all their cards first.', 'Card game', 3, 5, 60)
;

INSERT INTO Locations (location_id, location_name, address_1, street, suburb, city, state, postcode, business_start_time, business_end_time, latitude, longitude)
VALUES 
(101, 'Detective 7 Board Game Club', '1205/401 Docklands Dr, Docklands VIC 3008', 'Docklands Dr', 'Docklands', 'Melbourne', 'VIC', '3008', '17:00', '23:55', -37.8140685, 144.940132),
(102, 'Board game club', '31 Carrington Rd, Box Hill VIC 3128', 'Carrington Rd', 'Box Hill', 'Melbourne', 'VIC', '3128', '15:00', '22:00', -37.82037076, 145.1219144),
(103, 'Le Town Board Games & Mahjong', '243 Little Bourke St, Melbourne VIC 3000', 'Little Bourke St', 'Melbourne', 'Melbourne', 'VIC', '3000', '09:00', '17:00', -37.81258126, 144.9654836),
(104, 'Plays Play Club', '69-71 Peel St, West Melbourne VIC 3003', 'Peel St', 'West Melbourne', 'Melbourne', 'VIC', '3000', '09:00', '20:00', -37.8065609, 144.9555299),
(105, 'Wmoon', 'Unit 1/1 Howard St, Box Hill VIC 3128', 'Howard St', 'Box Hill', 'Melbourne', 'VIC', '3128', '14:00', '22:00', -37.82324568, 145.1225588),
(106, 'Panda mahjong', 'shop3/858 Collins St, Docklands VIC 3008', 'Collins St', 'Docklands', 'Melbourne', 'VIC', '3008', '14:00', '22:00', -37.82081053, 144.943992)
;

INSERT INTO Events (event_id, event_name, activity_id, location_id, participants_count, event_duration_min, event_date, event_start_time_24hr, event_end_time_24hr, event_prerequisites)
VALUES 
(101, 'The Mahjong attack', 101, 101, 3, 180, '2022-04-03', '15:00', '19:00', 'None'),
(102, 'Chase the Murder mystery', 102, 102, 2, 120, '2022-04-06', '09:00', '12:00', 'None'),
(103, 'Enter the Werewolves of Miller\'s Hollow', 103, 103, 4, 60, '2022-04-09', '13:00', '14:00', 'None'),
(104, 'Subscribe to the Mafia Game', 104, 104, 5, 240, '2022-04-12', '15:00', '20:00', 'None'),
(105, 'Find who is the spy (undercover) ?', 105, 105, 2, 120, '2022-04-14', '10:00', '12:30', 'None'),
(106, 'Play the Dou dizhu', 106, 106, 4, 150, '2022-04-15', '18:00', '22:30', 'None')
;


	
	
	
	
	


