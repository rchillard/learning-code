-- Create a new table
CREATE TABLE tablename
	(
		column_name datatype,
        column_name datatype
	);

-- Create a new table with NOT NULL
CREATE TABLE tablename
	(
		column_name datatype NOT NULL,
        column_name datatype NOT NULL
	);

-- Create a new table with DEFAULT
CREATE TABLE tablename
	(
		column_name datatype DEFAULT default_value,
        column_name datatype DEFAULT default_value
	);

-- Create a new table with NOT NULL and DEFAULT
CREATE TABLE tablename
	(
		column_name datatype NOT NULL DEFAULT default_value,
        column_name datatype NOT NULL DEFAULT default_value
	);

-- Create a new table with a PRIMARY KEY
CREATE TABLE tablename
	(
		column_name datatype PRIMARY KEY,
		column_name datatype
	);

-- Create a new table with an AUTO_INCREMENT column set to PRIMARY KEY
CREATE TABLE tablename
	(
		column_name datatype AUTO_INCREMENT,
		PRIMARY KEY(column_name)
	);


-- List all the tables in a database
SHOW TABLES;


-- Three different ways to see the columns of a table
SHOW COLUMNS FROM tablename;
DESCRIBE tablename;
DESC tablename;


-- Delete a table
DROP TABLE tablename;