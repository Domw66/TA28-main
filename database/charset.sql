ALTER TABLE `ta28`.`charities` 
CHARACTER SET = utf8 , COLLATE = utf8_general_ci ;
ALTER TABLE `ta28`.`charities_services` 
CHARACTER SET = utf8 , COLLATE = utf8_general_ci ;
ALTER TABLE `ta28`.`charities_states` 
CHARACTER SET = utf8 , COLLATE = utf8_general_ci ;
ALTER TABLE `ta28`.`provisions` 
CHARACTER SET = utf8 , COLLATE = utf8_general_ci ;
ALTER TABLE `ta28`.`quiz` 
CHARACTER SET = utf8 , COLLATE = utf8_general_ci ;
ALTER TABLE `ta28`.`services` 
CHARACTER SET = utf8 , COLLATE = utf8_general_ci ;
ALTER TABLE `ta28`.`states` 
CHARACTER SET = utf8 , COLLATE = utf8_general_ci ;

show variables like 'character_set_%';

ALTER DATABASE ta28 CHARACTER SET utf8 COLLATE utf8_general_ci;