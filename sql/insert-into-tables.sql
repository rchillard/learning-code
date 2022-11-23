-- Insert new value into table
INSERT INTO tablename (column_name1, column_name2)
VALUES ('value1', value2);

-- Insert a single record
INSERT INTO pets (name, age)
VALUES ('Mr. Magoo', 3);

-- List the contents of the pets table
SELECT * FROM pets;

-- When Inserting, order does not matter
INSERT INTO pets (age, name)
VALUES (7, 'Scaredy Cat');

-- List the contents of the pets table
SELECT * FROM pets;

-- Inserting multiple values
INSERT INTO pets (name, age)
VALUES ("Lord Scratchington", 1),
       ("Nightrunner", 5),
       ("Calico Jack", 9);

-- List the contents of the pets table
SELECT * FROM pets;