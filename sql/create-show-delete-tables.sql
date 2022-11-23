-- Create a new table
CREATE TABLE tablename
	(
		column_name datatype,
        column_name datatype
	);

-- List all the tables in a database
SHOW TABLES;

-- Three different ways to see the contents of a table
SHOW COLUMNS FROM tablename;
DESCRIBE tablename;
DESC tablename;

-- Delete a table
DROP TABLE tablename;