````md
# 🗄️ Database Learning Roadmap

> A structured roadmap for learning databases from absolute basics to real-world backend integration.

This roadmap focuses on understanding **how databases work**, learning **SQL with MySQL**, understanding **NoSQL with MongoDB**, and finally connecting databases to **Node.js + Express.js** applications.

The goal is not to memorize commands.

The goal is to understand:

```text
Understand Data
      ↓
Design Data
      ↓
Store Data
      ↓
Read Data
      ↓
Update Data
      ↓
Delete Data
      ↓
Connect Data
      ↓
Optimize Data
      ↓
Connect Database to Backend
````

---

# 📚 Database Roadmap

```text
Database Fundamentals
        ↓
MySQL / SQL
        ↓
Database Design
        ↓
Node.js + MySQL
        ↓
Student Management Project
        ↓
MongoDB / NoSQL
        ↓
Node.js + MongoDB
        ↓
Todo / Blog Database Project
```

---

# 🟢 Phase 1 — Database Fundamentals

Start by understanding what a database actually is.

## Topics

* [ ] What is a Database?
* [ ] What is DBMS?
* [ ] What is RDBMS?
* [ ] What is SQL?
* [ ] What is NoSQL?
* [ ] Database vs Table
* [ ] Table vs Row
* [ ] Row vs Column
* [ ] Schema
* [ ] Data Types
* [ ] NULL
* [ ] Database Server
* [ ] Database Client

## Goal

Understand this structure:

```text
Database Server
      ↓
Database
      ↓
Table
      ↓
Rows
      ↓
Columns
```

---

# 🐬 Phase 2 — MySQL Setup

Learn how to install and work with MySQL.

## Tools

* [ ] MySQL Server
* [ ] MySQL CLI
* [ ] MySQL Workbench
* [ ] VS Code

## Learn

* [ ] Install MySQL
* [ ] Configure MySQL Server
* [ ] Create root user
* [ ] Understand host
* [ ] Understand port
* [ ] Understand username
* [ ] Understand password
* [ ] Connect using terminal
* [ ] Connect using Workbench

## Basic Connection

```powershell
mysql -u root -p
```

---

# 🔵 Phase 3 — Databases and Tables

Now start writing SQL.

## Database Commands

```sql
CREATE DATABASE;
SHOW DATABASES;
USE;
DROP DATABASE;
```

## Table Commands

```sql
CREATE TABLE;
SHOW TABLES;
DESCRIBE;
ALTER TABLE;
DROP TABLE;
TRUNCATE TABLE;
```

## Example

```sql
CREATE DATABASE student_management;

USE student_management;

CREATE TABLE students (
    id INT,
    name VARCHAR(100),
    course VARCHAR(100)
);
```

## Goal

Be able to create a database and tables without copying code.

---

# 🟡 Phase 4 — Data Types

Learn the most common SQL data types.

## Numbers

```text
INT
BIGINT
DECIMAL
FLOAT
DOUBLE
```

## Text

```text
CHAR
VARCHAR
TEXT
```

## Date and Time

```text
DATE
TIME
DATETIME
TIMESTAMP
```

## Other Concepts

```text
BOOLEAN
NULL
DEFAULT
```

## Goal

Understand why one data type is chosen over another.

---

# 🔑 Phase 5 — Keys and Constraints

This is one of the most important parts of relational databases.

## Learn

* [ ] Primary Key
* [ ] Foreign Key
* [ ] UNIQUE
* [ ] NOT NULL
* [ ] DEFAULT
* [ ] CHECK
* [ ] AUTO_INCREMENT

## Example

```sql
id INT PRIMARY KEY AUTO_INCREMENT
```

This means the ID:

```text
→ identifies the row
→ must be unique
→ is generated automatically
```

---

# ➕ Phase 6 — INSERT

Learn how to add data.

## Topics

* [ ] INSERT
* [ ] Insert one row
* [ ] Insert multiple rows
* [ ] Insert specific columns

## Example

```sql
INSERT INTO students (name, course)
VALUES ('Ayush', 'BCA');
```

Multiple rows:

```sql
INSERT INTO students (name, course)
VALUES
    ('Ayush', 'BCA'),
    ('Rohit', 'BTech');
```

---

# 🔎 Phase 7 — SELECT

This is one of the most important SQL skills.

## Basic

```sql
SELECT;
FROM;
WHERE;
```

## Conditions

```text
AND
OR
NOT
IN
BETWEEN
LIKE
IS NULL
```

## Sorting and Limiting

```text
ORDER BY
LIMIT
OFFSET
```

## Aliases

```sql
SELECT name AS student_name
FROM students;
```

## Example

```sql
SELECT *
FROM students
WHERE course = 'BCA';
```

## Goal

Be able to retrieve exactly the information you need.

---

# ✏️ Phase 8 — UPDATE

Learn how to modify existing data.

```sql
UPDATE students
SET course = 'BCA CSE'
WHERE id = 1;
```

## Learn

* [ ] UPDATE
* [ ] SET
* [ ] WHERE

## Important

Understand why this is dangerous:

```sql
UPDATE students
SET course = 'BCA CSE';
```

Without `WHERE`, every matching row can be updated.

---

# 🗑️ Phase 9 — DELETE

Learn how to remove data.

```sql
DELETE FROM students
WHERE id = 1;
```

## Learn

* [ ] DELETE
* [ ] WHERE
* [ ] Difference between DELETE and TRUNCATE
* [ ] Understand accidental deletes

### Important

Be careful with:

```sql
DELETE FROM students;
```

This can remove every row in the table.

---

# 🔗 Phase 10 — Relationships

Now learn how tables are connected.

## Relationship Types

### One-to-One

```text
User
 ↓
Profile
```

### One-to-Many

```text
Department
    ↓
Students
```

### Many-to-Many

```text
Students
   ↕
Enrollments
   ↕
Courses
```

## Goal

Understand why relationships are needed instead of putting everything into one table.

---

# 🔐 Phase 11 — Foreign Keys

Learn how tables reference other tables.

Example:

```text
students
    ↓
student_id
    ↓
enrollments
```

Example SQL:

```sql
FOREIGN KEY (student_id)
REFERENCES students(id)
```

## Learn

* [ ] Foreign Keys
* [ ] Referential Integrity
* [ ] ON DELETE
* [ ] ON UPDATE
* [ ] CASCADE

---

# 🔥 Phase 12 — JOINs

JOINs are one of the most important SQL skills.

## Learn in this order

* [ ] INNER JOIN
* [ ] LEFT JOIN
* [ ] RIGHT JOIN
* [ ] CROSS JOIN

## Example

```text
students
    +
enrollments
    +
courses
```

Goal:

> Get a student's name together with the course they are enrolled in.

Example:

```sql
SELECT students.name, courses.name
FROM students
JOIN enrollments
    ON students.id = enrollments.student_id
JOIN courses
    ON courses.id = enrollments.course_id;
```

---

# 📊 Phase 13 — Aggregate Functions

Learn how to calculate information from groups of rows.

## Functions

```text
COUNT()
SUM()
AVG()
MIN()
MAX()
```

## Then Learn

```text
GROUP BY
HAVING
```

## Example

```sql
SELECT course, COUNT(*)
FROM students
GROUP BY course;
```

### Important difference

```text
WHERE
→ filters rows

HAVING
→ filters groups
```

---

# 🧠 Phase 14 — Advanced SQL Queries

After the basics become comfortable, learn:

* [ ] Subqueries
* [ ] Correlated Subqueries
* [ ] CASE
* [ ] COALESCE
* [ ] CTEs
* [ ] String Functions
* [ ] Date Functions
* [ ] Conditional Expressions

The goal is to solve more complicated data problems.

---

# 🏗️ Phase 15 — Database Design

Now start thinking like a backend developer.

## Learn

* [ ] Schema Design
* [ ] Normalization
* [ ] 1NF
* [ ] 2NF
* [ ] 3NF
* [ ] Data Redundancy
* [ ] Data Consistency
* [ ] Relationships
* [ ] Junction Tables

### Example

Instead of:

```text
students

id | name | course1 | course2 | course3
```

Design separate tables:

```text
students
courses
enrollments
```

This creates a cleaner relational design.

---

# ⚡ Phase 16 — Indexes

Indexes help databases find data efficiently.

## Learn

* [ ] What is an Index?
* [ ] Why indexes are useful
* [ ] Primary Key Index
* [ ] Unique Index
* [ ] Composite Index
* [ ] When to add an index
* [ ] When not to add an index
* [ ] Index trade-offs
* [ ] EXPLAIN

## Example

```sql
CREATE INDEX idx_course
ON students(course);
```

Goal:

Understand that indexes can improve reads but also have costs for storage and data modifications.

---

# 🔄 Phase 17 — Transactions

Transactions are very important in real-world systems.

## Learn

* [ ] Transaction
* [ ] COMMIT
* [ ] ROLLBACK
* [ ] ACID
* [ ] Atomicity
* [ ] Consistency
* [ ] Isolation
* [ ] Durability

## Basic Flow

```text
START TRANSACTION
       ↓
Operation 1
       ↓
Operation 2
       ↓
Everything successful?
    ↓          ↓
  COMMIT    ROLLBACK
```

Transactions are especially important for operations such as:

```text
Orders
Payments
Inventory
Banking
```

---

# 👁️ Phase 18 — Views

Learn database views.

## Topics

* [ ] What is a View?
* [ ] CREATE VIEW
* [ ] Using a View
* [ ] Updating Views
* [ ] When Views are useful

Basic idea:

```text
Table
 ↓
Query
 ↓
View
```

A View stores a query definition that can be queried like a table.

---

# 🟣 Phase 19 — Node.js + MySQL

Now connect everything you've learned to Node.js.

Architecture:

```text
React
 ↓
Express
 ↓
Controller
 ↓
Model
 ↓
MySQL
```

## Learn

* [ ] MySQL Node.js Driver
* [ ] `mysql2`
* [ ] Database Connection
* [ ] Connection Pool
* [ ] SQL Queries from Node.js
* [ ] Parameterized Queries
* [ ] Error Handling
* [ ] Environment Variables

Example package:

```powershell
npm install mysql2
```

---

# 🔗 Phase 20 — Express + MySQL

Now replace your temporary JavaScript array:

```js
const students = [];
```

with a real database.

## API Flow

### Create

```text
POST /students
      ↓
Controller
      ↓
Model
      ↓
INSERT
      ↓
MySQL
```

### Read

```text
GET /students
      ↓
Controller
      ↓
Model
      ↓
SELECT
      ↓
MySQL
```

### Update

```text
PUT /students/:id
      ↓
Controller
      ↓
Model
      ↓
UPDATE
      ↓
MySQL
```

### Delete

```text
DELETE /students/:id
      ↓
Controller
      ↓
Model
      ↓
DELETE
      ↓
MySQL
```

---

# 🎓 Phase 21 — Project: Student Management System

Build a real relational database project.

## Suggested Tables

```text
students
courses
departments
enrollments
```

## Features

* [ ] Create Student
* [ ] Get Students
* [ ] Get Student by ID
* [ ] Update Student
* [ ] Delete Student
* [ ] Search Students
* [ ] Filter Students
* [ ] Sort Students
* [ ] Course Relationships
* [ ] Department Relationships
* [ ] Enrollment Relationships

## Goal

Design the database yourself before writing the API.

---

# 📚 Phase 22 — Project: Library Management System

Build a larger relational system.

## Suggested Tables

```text
users
books
authors
categories
borrowings
```

## Features

* [ ] Add Book
* [ ] Add User
* [ ] Borrow Book
* [ ] Return Book
* [ ] Search Books
* [ ] Track Borrowing
* [ ] Find Overdue Books
* [ ] Book-Author Relationships
* [ ] Book-Category Relationships

## Skills Practiced

```text
Primary Keys
Foreign Keys
Relationships
JOINs
GROUP BY
Aggregate Functions
Indexes
Transactions
```

---

# 🟤 Phase 23 — MongoDB / NoSQL

After learning relational databases, move to MongoDB.

## Fundamentals

* [ ] What is NoSQL?
* [ ] SQL vs NoSQL
* [ ] MongoDB
* [ ] Database
* [ ] Collection
* [ ] Document
* [ ] Field
* [ ] ObjectId

### MySQL

```text
Database
   ↓
Tables
   ↓
Rows
```

### MongoDB

```text
Database
   ↓
Collections
   ↓
Documents
```

---

# 🟤 Phase 24 — MongoDB CRUD

Learn:

```text
insertOne
insertMany
find
findOne
updateOne
updateMany
deleteOne
deleteMany
```

Then learn:

```text
Queries
Filtering
Sorting
Pagination
Projection
Nested Documents
Arrays
```

---

# 🟤 Phase 25 — MongoDB Advanced

Learn:

* [ ] Aggregation
* [ ] Indexes
* [ ] Relationships
* [ ] Embedding
* [ ] Referencing
* [ ] Transactions
* [ ] MongoDB Atlas

---

# 🧩 Phase 26 — Mongoose

Learn how Node.js applications work with MongoDB using Mongoose.

## Topics

* [ ] Mongoose
* [ ] Schema
* [ ] Model
* [ ] Validation
* [ ] Middleware
* [ ] Query Methods
* [ ] Population
* [ ] Relationships

---

# 🚀 Phase 27 — Node.js + MongoDB

Architecture:

```text
React
 ↓
Express
 ↓
Controller
 ↓
Mongoose Model
 ↓
MongoDB
```

## Projects

* [ ] Todo Database
* [ ] Blog Database

---

# 🧠 Phase 28 — SQL vs NoSQL

After learning both, compare them properly.

## SQL

```text
Relational
Tables
Rows
Columns
Structured Schema
Relationships
SQL
JOINs
```

## NoSQL

```text
Document Based
Collections
Documents
Flexible Structure
MongoDB Queries
Aggregation
```

The goal is not to decide that one is always better.

The goal is to understand:

> **Which data model fits the problem you're solving?**

---

# 🔥 Phase 29 — Database Skills for Real Projects

Once SQL and MongoDB are comfortable, focus on general database skills.

Learn:

* [ ] Data Modeling
* [ ] Query Optimization
* [ ] Indexing
* [ ] Transactions
* [ ] Database Security
* [ ] Connection Pooling
* [ ] Pagination
* [ ] Large Dataset Handling
* [ ] Backup Basics
* [ ] Migration Basics
* [ ] Monitoring Basics

---

# 🧭 Complete Learning Path

```text
DATABASE BASICS
      ↓
MYSQL SETUP
      ↓
DATABASES
      ↓
TABLES
      ↓
DATA TYPES
      ↓
PRIMARY KEYS
      ↓
CONSTRAINTS
      ↓
INSERT
      ↓
SELECT
      ↓
WHERE
      ↓
UPDATE
      ↓
DELETE
      ↓
RELATIONSHIPS
      ↓
FOREIGN KEYS
      ↓
JOINS
      ↓
GROUP BY
      ↓
AGGREGATE FUNCTIONS
      ↓
ADVANCED SQL
      ↓
DATABASE DESIGN
      ↓
NORMALIZATION
      ↓
INDEXES
      ↓
TRANSACTIONS
      ↓
VIEWS
      ↓
NODE + MYSQL
      ↓
EXPRESS + MYSQL
      ↓
STUDENT MANAGEMENT
      ↓
MONGODB
      ↓
MONGODB CRUD
      ↓
AGGREGATION
      ↓
MONGOOSE
      ↓
NODE + MONGODB
      ↓
BLOG / TODO DATABASE
```

---

# 🎯 What You Should Be Able to Do at the End

By the end of this roadmap, you should be able to:

* [ ] Design a database from a real-world requirement
* [ ] Create relational tables
* [ ] Choose appropriate data types
* [ ] Use primary and foreign keys
* [ ] Write SQL queries
* [ ] Perform CRUD operations
* [ ] Use JOINs
* [ ] Use GROUP BY and aggregate functions
* [ ] Design relationships
* [ ] Normalize a database
* [ ] Create useful indexes
* [ ] Use transactions
* [ ] Work with MySQL from Node.js
* [ ] Build an Express + MySQL API
* [ ] Work with MongoDB
* [ ] Use Mongoose
* [ ] Build an Express + MongoDB API
* [ ] Understand SQL and NoSQL differences
* [ ] Choose an appropriate database approach for a project

---

# 🏆 Final Goal

The final goal is to understand databases as a **developer**, not just as someone who knows SQL syntax.

```text
Requirement
     ↓
Data Modeling
     ↓
Database Design
     ↓
Tables / Collections
     ↓
Queries
     ↓
Backend Integration
     ↓
API
     ↓
Frontend
```

---

# 📌 Current Progress

## MySQL

**Status:** 🟡 Starting

## MongoDB

**Status:** ⚪ Not Started

## Database Projects

**Status:** ⚪ Not Started

---

# 🌱 Learning Method

For every topic:

```text
Learn
  ↓
Understand
  ↓
Write it yourself
  ↓
Test it
  ↓
Make mistakes
  ↓
Fix mistakes
  ↓
Build something
  ↓
Move to the next topic
```

The aim is to understand **why** something works, not just memorize **how** to write it.

---

# 🚀 Database Journey

```text
Beginner
   ↓
SQL Basics
   ↓
Database Design
   ↓
Relational Databases
   ↓
Backend Integration
   ↓
MongoDB
   ↓
NoSQL
   ↓
Real Projects
   ↓
Production Database Skills
```

**Keep building. Keep testing. Keep breaking things. Keep learning.** 🚀

```

This roadmap gives you a clean progression from **zero database knowledge → MySQL → database design → Node/Express integration → MongoDB → real projects**.
```
