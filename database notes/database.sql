-- CREATE DATABASE
-- CREATE DATABASE IF NOT EXISTS temp;

-- Drop database
-- DROP DATABASE if exists temp 

-- SHOW DATABASES; 
-- SHOW TABLES;

-- CREATE TABLE student( -- CREATE TABLE
--     id INT PRIMARY KEY, -- UNIQUE, NOT NULL, PRIMARY KEY 
--     name VARCHAR(100),
--     age INT NOT NULL
-- );

-- INSERT INTO student(id, name, age) VALUES(1, "aman", 21), (2, "ayush", 23); -- INSERT data into TABLE

-- CREATE TABLE emp(
--     id INT,
--     salary INT DEFAULT 25000
-- );

-- INSERT INTO emp (id) VALUES(
--     (101)
-- );

-- SELECT * FROM students WHERE marks > 70 AND city = "uttarakhand";
-- SELECT * FROM students WHERE marks BETWEEN 78 AND 89;
-- SELECT * FROM students WHERE city IN ("haridwar", "Kotdwara", "delhi");
-- SELECT * FROM students WHERE city NOT IN ("kotdwara", "uttarakhand");

-- SELECT * FROM students 
-- WHERE marks > 50
-- LIMIT 3;

-- SELECT * FROM students ORDER BY marks DESC; -- ASC

-- SELECT AVG(MArks) from students;
-- SELECT MAX(marks) from students;
-- SELECT MIN(marks) from student;
-- SELECT COUNT(rollno) from students;

-- SELECT city, COUNT(rollno) AS Total_City 
-- FROM students 
-- GROUP BY city;

-- SELECT city, AVG(marks) 
-- FROM students
-- GROUP BY city
-- ORDER BY AVG(marks) DESC;

-- SELECT city, COUNT(rollno) FROM students
-- GROUP BY city
-- HAVING max(marks) > 70;

-- SELECT name
-- FROM students
-- WHERE grade = 'C'
-- GROUP BY name
-- HAVING MAX(marks) >= 70;

-- UPDATE students SET grade = "B" WHERE marks = 57;
-- DELETE FROM students WHERE marks < 30;


-- SELECT * FROM students;



-- CREATE TABLE dept(
--     id int PRIMARY KEY,
--     name VARCHAR(100)
-- );

-- CREATE TABLE teacher(
--     id INT PRIMARY KEY,
--     name VARCHAR(100),
--     dept_id int,
--     FOREIGN KEY (dept_id) REFERENCES dept(id)
-- );

-- ALTER TABLE student
-- add COLUMN age int NOT NULL DEFAULT 19;

-- ALTER TABLE student
-- MODIFY COLUMN age VARCHAR(2);

-- ALTER TABLE student
-- CHANGE age stu_age INT;

-- INSERT into student 
-- (rollno, name, marks, stu_age)
-- VALUES
-- (107, "bob", 78, 100);

-- ALTER TABLE student
-- DROP COLUMN stu_age;

-- TRUNCATE TABLE student;

-- --
-- ALTER TABLE student 
-- CHANGE name full_name VARCHAR(100);

-- DELETE FROM student WHERE marks < 50;

-- ALTER TABLE student
-- DROP COLUMN grade;
--
-- inner join
-- SELECT * from student as s 
-- INNER JOIN course as c
-- on s.rollno = c.rollno;

-- -- left join
-- SELECT * from student as s 
-- LEFT JOIN course as c
-- on s.rollno = c.rollno;

-- -- right join
-- SELECT * from student as s 
-- RIGHT JOIN course as c
-- on s.rollno = c.rollno;

-- -- full join
-- SELECT * from student as s 
-- LEFT JOIN course as c
-- on s.rollno = c.rollno
-- UNION -- imp    
-- SELECT * from student as s 
-- RIGHT JOIN course as c
-- on s.rollno = c.rollno;

-- -- left exclusive join
-- SELECT * from student as s 
-- LEFT JOIN course as c
-- on s.rollno = c.rollno
-- WHERE c.rollno IS NULL;

-- -- right exclusive join
-- SELECT * from student as s 
-- RIGHT JOIN course as c
-- on s.rollno = c.rollno
-- WHERE s.rollno IS NULL;


-- SELECT * from student as s 
-- LEFT JOIN course as c
-- on s.rollno = c.rollno
-- WHERE c.rollno IS NULL
-- UNION
-- SELECT * from student as s 
-- RIGHT JOIN course as c
-- on s.rollno = c.rollno
-- WHERE s.rollno IS NULL;

CREATE TABLE course(
--     rollno int PRIMARY KEY,
--     course VARCHAR(100)
-- );

-- INSERT INTO course (rollno, course)
-- VALUES
-- (102, "english"),
-- (105, "hindi"),
-- (103, "sst"),
-- (104, "science");

-- CREATE TABLE employee(
-- id INT PRIMARY KEY,
-- name VARCHAR(50),
-- manager_id INT
-- );

-- INSERT INTO employee (id, name, manager_id)
-- VALUES
-- (101, "adam", 103),
-- (102, "bob", 104),
-- (103, "casey", NULL),
-- (104, "donald", 103);

-- SELECT * FROM employee as a
-- JOIN employee as b 
-- on a.id = b.manager_id;

-- SELECT a.name as manager_name, b.name 
-- FROM employee as a
-- JOIN employee as b 
-- on a.id = b.manager_id;

-- ---------------------------------------------------------------


CREATE DATABASE IF NOT EXISTS COLLEGE; -- CREATE database

USE college; -- use database

CREATE TABLE student(
    rollno INT PRIMARY KEY,
    name VARCHAR(100),
    marks INT NOT NULL,
    grade VARCHAR(100),
    city VARCHAR(100)
);

INSERT INTO student (rollno, name, marks, grade, city)
VALUES
(101, "Ayush", 78, "C", "Uttarakhand"), 
(102, "Allu", 38, "B", "Uttarakhand"),
(103, "Manish", 57, "A", "Haridwar"),
(104, "Baba", 89, "F", "Kotdwara"),
(105, "Anil", 23, "G", "Uttarakhand");

select * from student;


-- dynamic query
SELECT name, marks from student 
where marks > (select AVG(marks) from student);



SELECT name, rollno 
from student 
WHERE rollno IN(
    SELECT rollno 
    from student 
    where rollno % 2 = 0
    );

-- WIth from
SELECT MAX(marks) 
FROM (SELECT * FROM student WHERE city = "uttarakhand") as temp;

-- create view A  virtual TABLE;

CREATE VIEW view1 AS 
SELECT rollno, name, marks FROM student;

SELECT * from view1;


