DROP DATABASE IF EXISTS reviews_ts;

CREATE DATABASE reviews_ts;

USE reviews_ts;

DROP TABLE IF EXISTS characteristics;

CREATE TABLE characteristics (
  id int NOT NULL AUTO_INCREMENT,
  product_id int NOT NULL,
  name varchar(20) NOT NULL,
  PRIMARY KEY (ID)
);


/*
LOAD DATA LOCAL INFILE
1. show global variables like 'local_infile';
2. SET GLOBAL local_infile=1;
3. quit;
4. mysql --local-infile=1 -u root -p;
5.
LOAD DATA LOCAL INFILE "./rawdata/test_characteristics.csv" INTO TABLE characteristics
FIELDS TERMINATED BY ','
IGNORE 1 ROWS;

// LOAD COMMAND
LOAD DATA LOCAL INFILE "./rawdata/test_characteristics.csv" INTO TABLE characteristics
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

EXECUTE.sql file: mysql -u root -p < ./schema/schema_test.sql
ACCESS MySQL CLI: mysql -u root -p
SHOW DATABASES; USE [db name];
SHOW TABLES;
DESC [table name];
SELECT * FROM [table name]; // SELECT * FROM groceries;
INSERT INTO [table name] (?, ?) VALUES (?, ?);
DELETE FROM groceries WHERE quantity=800;
*
UPDATE table
SET
  column1 = new_value1,
  column2 = new_value2,
WHERE
  condition;
*
*/