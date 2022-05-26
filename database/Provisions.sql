drop table Provisions;
delete from Provisions where provision_id > 0;
CREATE TABLE Provisions (
    provision_id int NOT NULL PRIMARY KEY,
    provision_name varchar(255),
    unit_of_measure_ful varchar(50),
    unit_of_measure_short varchar(50),
    quantity decimal(5,2),
    price_in_aud decimal(5,2)
);

INSERT INTO `ta28`.`Provisions`
(`provision_id`, 
`provision_name`,
`unit_of_measure_ful`,
`unit_of_measure_short`,
`quantity`,
`price_in_aud`)
VALUES
(1, 'Milk (regular)', 'Litres', 'Ltr', 0.25, 0.43),
(2, 'White Bread', 'Grams', 'g', 125, 0.72),
(3, 'Rice (white)', 'Kilograms', 'Kg', 0.1, 0.27),
(4, 'Eggs (regular)', 'Eggs', 'Eggs', 2, 0.97),
(5, 'Cheese', 'Kilograms', 'Kg', 0.1, 1.11),
(6, 'Chicken', 'Kilograms', 'Kg', 0.15, 1.64),
(7, 'Beef Round', 'Kilograms', 'Kg', 0.15, 2.76),
(8, 'Apples', 'Kilograms', 'Kg', 0.3, 1.31),
(9, 'Banana', 'Kilograms', 'Kg', 0.25, 0.90),
(10, 'Oranges', 'Kilograms', 'Kg', 0.30, 1.14),
(11, 'Tomato', 'Kilograms', 'Kg', 0.20, 1.15),
(12, 'Potato', 'Kilograms', 'Kg', 0.20, 0.65),
(13, 'Onion', 'Kilograms', 'Kg', 0.10, 0.26),
(14, 'Lettuce', 'head', 'head', 0.2, 0.55)
;

select * from Provisions;



