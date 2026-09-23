-- CREATE DATABASE
-- CREATE DATABASE IF NOT EXISTS temp;

-- Drop database
-- DROP DATABASE if exists temp 

-- SHOW DATABASES; 
-- SHOW TABLES;

-- -------------------------------------------

CREATE DATABASE IF NOT EXISTS COLLEGE; -- CREATE database

USE college; -- use database

CREATE TABLE student( -- CREATE TABLE
    id INT PRIMARY KEY, 
    name VARCHAR(100),
    age INT NOT NULL
);

INSERT INTO student(id, name, age) VALUES(1, "aman", 21), (2, "ayush", 23); -- INSERT data into TABLE

SELECT * FROM student; -- show result
