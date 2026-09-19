# 🚀 Express Student API

> A backend learning project built with **Node.js and Express.js** to understand how professional REST APIs are structured.

This project is being built step-by-step while learning backend development.

The API started as a simple Express server and is gradually being organized into a cleaner architecture using:

**Routes → Middleware → Controllers → Models**

---

## 📌 Project Status

**Status:** 🚧 Under Development

### Express Progress

| Topic | Status |
|---|:---:|
| Express Basics | ✅ |
| Express Application | ✅ |
| `app.listen()` | ✅ |
| Routes | ✅ |
| `req` / `res` | ✅ |
| Route Parameters | ✅ |
| Query Parameters | ✅ |
| Request Body | ✅ |
| JSON Middleware | ✅ |
| Custom Middleware | ✅ |
| `next()` | ✅ |
| HTTP Status Codes | ✅ |
| GET | ✅ |
| POST | ✅ |
| PUT | ✅ |
| DELETE | ✅ |
| CRUD | ✅ |
| `express.Router()` | ✅ |
| Controllers | ✅ |
| Models | ✅ |
| Validation | ✅ |
| Error Handling | ✅ |
| MVC Structure | ✅ |

### Upcoming Topics

- ⏳ Better Error Handling
- ⏳ Advanced Validation
- ⏳ Authentication
- ⏳ Database Integration
- ⏳ CORS
- ⏳ File Uploads
- ⏳ Production API Structure
- ⏳ Deployment

---

# 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **JavaScript**
- **Thunder Client**
- **Git & GitHub**
- **VS Code**

---

# 📁 Project Architecture

The project is being organized using a simple MVC-style structure:

```text
express-student-api/
│
├── src/
│   ├── app.js
│   ├── server.js
│   │
│   ├── routes/
│   │   └── studentRoutes.js
│   │
│   ├── controllers/
│   │   └── studentController.js
│   │
│   ├── middlewares/
│   │   ├── studentValidation.js
│   │   └── studentIdValidation.js
│   │
│   └── models/
│       └── studentModel.js
│
├── .gitignore
├── README.md
├── package.json
└── package-lock.json
```

---

# 🚀 Getting Started

## 1. Initialize the project

```powershell
npm init -y
```

## 2. Install Express

```powershell
npm install express
```

## 3. Install Nodemon

```powershell
npm install --save-dev nodemon
```

---

# 📜 NPM Scripts

Recommended `package.json` scripts:

```json
{
  "scripts": {
    "start": "node src/server.js",
    "dev": "nodemon src/server.js"
  }
}
```

### Start normally

```powershell
npm start
```

### Start with Nodemon

```powershell
npm run dev
```

Nodemon automatically restarts the server when files change.

---

# 🌐 Running the Server

## `server.js`

```js
const app = require("./app");

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
```

The API runs at:

```text
http://localhost:3000
```

---

# ⚡ Express Basics

## What is Express?

Express is a Node.js framework used for building:

- Web servers
- APIs
- REST APIs
- Backend applications

It provides an easier way to work with HTTP requests, routes, middleware, and responses.

---

# 🏗️ Creating an Express Application

```js
const express = require("express");

const app = express();
```

### What does this mean?

```js
const express = require("express");
```

Loads the Express package.

```js
const app = express();
```

Creates the Express application.

The `app` object is used to create:

- Routes
- Middleware
- Server configuration

---

# 📤 Exporting the App

At the bottom of `app.js`:

```js
module.exports = app;
```

This allows another file to use the Express application.

In `server.js`:

```js
const app = require("./app");
```

The server can then start the imported app.

---

# 🛣️ Routes

A route tells Express:

> When a request matching this method and path arrives, run this code.

Basic example:

```js
app.get("/", (req, res) => {
    res.send("Hello from Ayush");
});
```

---

# 🔵 GET Request

`GET` is generally used to **retrieve/read data**.

Example:

```js
app.get("/students", (req, res) => {
    res.json(students);
});
```

Request:

```text
GET /students
```

---

# 🟢 POST Request

`POST` is generally used to **send/create data**.

Example:

```js
app.post("/students", (req, res) => {
    const { name, course } = req.body;

    res.status(201).json({
        message: "Student created",
        name,
        course
    });
});
```

---

# 🟡 PUT Request

`PUT` is generally used to **update existing data**.

Example:

```js
app.put("/students/:id", (req, res) => {
    const id = Number(req.params.id);

    // update student
});
```

---

# 🔴 DELETE Request

`DELETE` is used to **remove data**.

Example:

```js
app.delete("/students/:id", (req, res) => {
    const id = Number(req.params.id);

    // delete student
});
```

---

# 🔄 CRUD

CRUD means:

```text
C → Create
R → Read
U → Update
D → Delete
```

Express API mapping:

| Operation | HTTP Method | Example |
|---|---|---|
| Create | POST | `/students` |
| Read | GET | `/students` |
| Update | PUT | `/students/:id` |
| Delete | DELETE | `/students/:id` |

---

# 📦 Request and Response

Routes commonly receive:

```js
(req, res)
```

## `req`

`req` means **request**.

It contains information coming from the client.

Examples:

```js
req.method
req.url
req.params
req.query
req.body
```

---

## `res`

`res` means **response**.

It is used to send something back to the client.

Examples:

```js
res.send()
res.json()
res.status()
```

---

# 🔍 `req.method`

Shows the HTTP method used by the client.

Example:

```js
console.log(req.method);
```

Possible values:

```text
GET
POST
PUT
DELETE
```

---

# 🔗 `req.url`

Shows the requested URL.

Example:

```js
console.log(req.url);
```

For:

```text
GET /students
```

the result is:

```text
/students
```

---

# 🔢 Route Parameters

Route parameters are values included directly in the URL path.

Example:

```text
/students/5
```

Route:

```js
app.get("/students/:id", (req, res) => {
    const id = req.params.id;

    res.send(`Student ID: ${id}`);
});
```

Here:

```js
req.params.id
```

returns:

```text
"5"
```

### Easy memory

```text
/students/5
          ↑
      req.params
```

Route parameters are commonly used when identifying a specific resource.

Examples:

```text
/students/1
/students/2
/students/50
```

---

# ❓ Query Parameters

Query parameters come after `?`.

Example:

```text
/students?course=BCA
```

Here:

```text
course=BCA
```

is a query parameter.

Access it with:

```js
req.query.course
```

Example:

```js
app.get("/search", (req, res) => {
    const course = req.query.course;

    res.send(`You searched for course: ${course}`);
});
```

Request:

```text
GET /search?course=BCA
```

Result:

```text
You searched for course: BCA
```

Multiple query parameters are also possible:

```text
/students?course=BCA&year=1
```

Then:

```js
req.query.course
req.query.year
```

---

# 🔀 Params vs Query

## Route Parameter

```text
/students/5
          ↑
       req.params
```

Used to identify a specific resource.

---

## Query Parameter

```text
/students?course=BCA
         ↑
      req.query
```

Used for things such as:

- Search
- Filtering
- Sorting
- Optional information

### Easy memory

```text
PARAM → part of the path

QUERY → information after ?
```

---

# 🧾 Request Body

`req.body` contains data sent inside the request body.

Example JSON:

```json
{
    "name": "Ayush",
    "course": "BCA"
}
```

Then:

```js
req.body.name
```

returns:

```text
Ayush
```

And:

```js
req.body.course
```

returns:

```text
BCA
```

---

# 🧩 JSON Middleware

To allow Express to read JSON request bodies:

```js
app.use(express.json());
```

This is middleware.

### Flow

```text
Client
   ↓
JSON body
   ↓
express.json()
   ↓
req.body
   ↓
Route / Controller
```

Without this middleware, JSON data may not be available through `req.body`.

---

# 🧰 Middleware

Middleware is a function that runs during the request/response process.

Basic flow:

```text
Request
   ↓
Middleware
   ↓
Route
   ↓
Response
```

Example:

```js
app.use((req, res, next) => {
    console.log("Middleware running...");
    next();
});
```

---

# ➡️ `next()`

`next()` means:

> Continue to the next step.

Example:

```js
app.use((req, res, next) => {
    console.log("Checking request...");
    next();
});
```

Flow:

```text
Request
   ↓
Middleware
   ↓
next()
   ↓
Next middleware / Route
```

Without `next()`:

```text
Request
   ↓
Middleware
   ↓
STOP
```

### Easy memory

```text
next() = "Go ahead"
```

---

# 🌍 `app.use()` vs `app.get()`

## `app.get()`

Handles a specific GET route.

```js
app.get("/students", (req, res) => {
    res.json([]);
});
```

It handles:

```text
GET /students
```

---

## `app.use()`

Used for middleware.

```js
app.use((req, res, next) => {
    console.log(req.method);
    next();
});
```

Middleware can be used across different request methods and routes.

### Easy memory

```text
app.get() → specific GET route

app.use() → middleware in the request flow
```

---

# 📝 Logging Middleware

Example:

```js
app.use((req, res, next) => {
    console.log("Method:", req.method);
    console.log("URL:", req.url);

    next();
});
```

For:

```text
GET /students
```

the terminal may show:

```text
Method: GET
URL: /students
```

---

# 🔐 Middleware Can Check Requests

Middleware can check information before allowing a request to continue.

Example:

```js
app.use((req, res, next) => {
    if (req.query.key !== "123") {
        return res.status(401).json({
            message: "Access denied"
        });
    }

    next();
});
```

Flow:

```text
Request
   ↓
Middleware checks request
   ↓
Invalid → Response → STOP
```

or:

```text
Request
   ↓
Middleware checks request
   ↓
Valid
   ↓
next()
   ↓
Route
```

---

# 📊 HTTP Status Codes

Status codes tell the client what happened.

| Code | Meaning |
|---|---|
| `200` | OK / successful request |
| `201` | Created |
| `400` | Bad Request |
| `401` | Unauthorized |
| `404` | Not Found |
| `500` | Internal Server Error |

Example:

```js
res.status(201).json({
    message: "Student created"
});
```

---

# ❌ 404 Handler

A 404 handler can handle routes that don't exist.

```js
app.use((req, res) => {
    res.status(404).json({
        message: "Route not found"
    });
});
```

Example:

```text
GET /something-that-does-not-exist
```

Response:

```json
{
    "message": "Route not found"
}
```

---

# 💥 Error Handling Middleware

Express error-handling middleware has **four parameters**:

```js
(err, req, res, next)
```

Example:

```js
app.use((err, req, res, next) => {
    console.log(err.message);

    res.status(500).json({
        message: "Something went wrong"
    });
});
```

---

# ⚠️ `next()` vs `next(error)`

Normal:

```js
next();
```

Means:

```text
Continue normally
```

Error:

```js
next(error);
```

Means:

```text
Send the error to error-handling middleware
```

Example:

```js
app.get("/test-error", (req, res, next) => {
    const error = new Error("Test error");

    next(error);
});
```

---

# 🛣️ Express Router

As the project grows, putting every route inside `app.js` becomes difficult to manage.

`express.Router()` allows routes to be separated into their own files.

Example:

```js
const express = require("express");

const router = express.Router();
```

A router is like a **mini route manager**.

---

# 📁 Student Router

Example:

```js
router.get("/", (req, res) => {
    res.send("Student route is working!");
});
```

Export it:

```js
module.exports = router;
```

Import it into `app.js`:

```js
const router = require("./routes/studentRoutes");
```

Connect it:

```js
app.use("/students", router);
```

---

# 🔗 Router Prefixes

If `app.js` contains:

```js
app.use("/students", router);
```

and the router contains:

```js
router.get("/");
```

the final route becomes:

```text
GET /students
```

The paths are combined:

```text
/students + /
        ↓
/students
```

Another example:

```js
router.get("/:id");
```

becomes:

```text
GET /students/:id
```

So:

```text
GET /students/5
```

matches:

```js
router.get("/:id");
```

---

# 🧠 Why Router Is Useful

Instead of:

```text
app.js
├── GET /students
├── POST /students
├── PUT /students/:id
├── DELETE /students/:id
└── many more routes...
```

we can organize:

```text
app.js
      ↓
studentRoutes.js
      ↓
student-related routes
```

This keeps the application cleaner and easier to maintain.

---

# 🧱 Controllers

A controller contains the logic for handling a request.

Instead of writing everything directly inside the route:

```js
router.get("/", (req, res) => {
    // lots of logic
});
```

we move the logic into a controller.

Example:

```js
const getStudents = (req, res) => {
    res.json({
        message: "Get students controller is working"
    });
};
```

Export:

```js
module.exports = {
    getStudents
};
```

---

# 🔗 Route → Controller

Import the controller:

```js
const { getStudents } = require("../controllers/studentController");
```

Then:

```js
router.get("/", getStudents);
```

Now the route only decides **where the request goes**.

The controller decides **what happens**.

### Easy memory

```text
Routes      → Where?
Controllers → What?
```

---

# 🗃️ Models

A Model handles application data.

Initially, the student data was inside the controller.

It was moved into:

```text
models/studentModel.js
```

Example:

```js
const students = [
    {
        id: 1,
        name: "Ayush",
        course: "BCA"
    },
    {
        id: 2,
        name: "Rohit",
        course: "BTech"
    }
];
```

---

# 📤 Model Functions

Instead of letting the controller directly manipulate the array, the Model provides functions.

Example:

```js
const getAllStudents = () => {
    return students;
};
```

Export:

```js
module.exports = {
    getAllStudents
};
```

The controller can then use:

```js
const { getAllStudents } = require("../models/studentModel");
```

and:

```js
const getStudents = (req, res) => {
    res.json(getAllStudents());
};
```

Important:

```js
getAllStudents
```

means the function itself.

```js
getAllStudents()
```

means execute the function.

---

# ➕ Creating Students in the Model

Example:

```js
const createStudent = (name, course) => {
    const newStudent = {
        id: students.length + 1,
        name,
        course
    };

    students.push(newStudent);

    return newStudent;
};
```

The controller can call:

```js
const newStudent = createStudent(name, course);
```

Now the Model handles the data operation.

---

# ✏️ Updating Students in the Model

Example:

```js
const updateStudent = (id, name, course) => {
    const student = students.find(student => student.id === id);

    if (!student) {
        return null;
    }

    student.name = name;
    student.course = course;

    return student;
};
```

The Model:

1. Finds the student
2. Returns `null` if not found
3. Updates the student
4. Returns the updated student

---

# 🗑️ Deleting Students in the Model

Example:

```js
const deleteStudent = (id) => {
    const index = students.findIndex(student => student.id === id);

    if (index === -1) {
        return null;
    }

    const deletedStudent = students.splice(index, 1);

    return deletedStudent[0];
};
```

---

# 🔎 Array Methods Learned

## `find()`

Finds the first matching item.

```js
const student = students.find(student => student.id === id);
```

If found:

```text
student object
```

If not found:

```text
undefined
```

---

## `findIndex()`

Finds the position of a matching item.

```js
const index = students.findIndex(
    student => student.id === id
);
```

Results:

```text
0, 1, 2... → found
-1          → not found
```

---

## `splice()`

Actually modifies the array.

```js
students.splice(index, 1);
```

Meaning:

> Start at `index` and remove `1` item.

---

## `slice()` vs `splice()`

### `slice()`

Creates a copy.

```js
students.slice(index, 1);
```

Does **not** remove the student.

### `splice()`

Changes the original array.

```js
students.splice(index, 1);
```

Actually removes the student.

---

# ✅ Validation

Validation means:

> Check whether incoming data is acceptable before using it.

Basic flow:

```text
Request
   ↓
Validation
   ↓
Valid? ── No → Error
   │
  Yes
   ↓
Controller
```

---

# 📝 Student Validation Middleware

Example:

```js
const validateStudent = (req, res, next) => {
    const { name, course } = req.body;

    if (
        typeof name !== "string" ||
        typeof course !== "string" ||
        name.trim() === "" ||
        course.trim() === ""
    ) {
        return res.status(400).json({
            message: "Name and course must be non-empty strings"
        });
    }

    next();
};
```

---

# 🔗 Using Validation Middleware

A route can use middleware before the controller:

```js
router.post("/", validateStudent, postStudent);
```

Flow:

```text
POST /students
      ↓
validateStudent
      ↓
postStudent
```

If validation fails:

```text
400 Response
      ↓
STOP
```

If validation succeeds:

```text
next()
  ↓
postStudent
```

---

# ♻️ Reusing Middleware

The same validation middleware can be used for multiple routes:

```js
router.post("/", validateStudent, postStudent);

router.put("/:id", validateIdStudent, validateStudent, putStudent);
```

This avoids repeating the same validation logic inside every controller.

---

# 🔢 ID Validation Middleware

Route parameters are strings.

Example:

```text
/students/5
```

```js
req.params.id
```

returns:

```text
"5"
```

Convert it:

```js
const id = Number(req.params.id);
```

But:

```text
/students/abc
```

becomes:

```text
NaN
```

So we validate it.

Example:

```js
const validateIdStudent = (req, res, next) => {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
        return res.status(400).json({
            message: "Student ID must be a number"
        });
    }

    next();
};
```

---

# 🧠 Important JavaScript Lessons

## `typeof`

Used to check the type of a value.

Examples:

```js
typeof "Ayush"
```

→ `"string"`

```js
typeof 123
```

→ `"number"`

```js
typeof true
```

→ `"boolean"`

---

## `Number()`

Converts a value to a number.

```js
Number("5")
```

→ `5`

```js
Number("abc")
```

→ `NaN`

---

## `Number.isNaN()`

Checks whether a value is `NaN`.

```js
Number.isNaN(id)
```

---

## `trim()`

Removes extra spaces from the beginning and end of a string.

```js
"Ayush".trim()
```

→ `"Ayush"`

```js
"   Ayush   ".trim()
```

→ `"Ayush"`

---

# 🧱 MVC Architecture

The project is now following a simple MVC-style architecture.

```text
Request
   ↓
Route
   ↓
Middleware
   ↓
Controller
   ↓
Model
   ↓
Data
```

### Route

Decides:

> Which handler should process this request?

### Middleware

Checks or processes the request before continuing.

### Controller

Contains request-handling logic.

### Model

Works with the application data.

---

# 🔄 Complete Example Flow

For:

```text
POST /students
```

the flow is:

```text
Thunder Client
      ↓
POST /students
      ↓
studentRoutes.js
      ↓
validateStudent
      ↓
postStudent
      ↓
createStudent()
      ↓
studentModel.js
      ↓
students.push()
      ↓
Response
```

For:

```text
PUT /students/1
```

the flow is:

```text
Thunder Client
      ↓
PUT /students/1
      ↓
validateIdStudent
      ↓
validateStudent
      ↓
putStudent
      ↓
updateStudent()
      ↓
Model
      ↓
Response
```

For:

```text
DELETE /students/1
```

the flow is:

```text
Thunder Client
      ↓
DELETE /students/1
      ↓
validateIdStudent
      ↓
delete controller
      ↓
deleteStudent()
      ↓
Model
      ↓
Response
```

---

# 🧪 API Testing with Thunder Client

Thunder Client is used to test the API without building a frontend.

Base URL:

```text
http://localhost:3000
```

---

## GET All Students

```text
GET /students
```

Full URL:

```text
http://localhost:3000/students
```

---

## GET Student by ID

```text
GET /students/1
```

Full URL:

```text
http://localhost:3000/students/1
```

---

## POST Student

```text
POST /students
```

Body:

```json
{
    "name": "Ayush",
    "course": "BCA"
}
```

Expected status:

```text
201 Created
```

---

## PUT Student

```text
PUT /students/1
```

Body:

```json
{
    "name": "Ayush Bhandari",
    "course": "BCA CSE"
}
```

Expected result:

The student's information is updated.

---

## DELETE Student

```text
DELETE /students/1
```

No request body is required for the current implementation.

Expected result:

The student is removed.

---

# 📋 API Summary

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/students` | Get all students |
| GET | `/students/:id` | Get a student by ID |
| POST | `/students` | Create a student |
| PUT | `/students/:id` | Update a student |
| DELETE | `/students/:id` | Delete a student |

---

# 💾 Current Data Storage

At the moment, students are stored in a JavaScript array:

```js
const students = [
    {
        id: 1,
        name: "Ayush",
        course: "BCA"
    },
    {
        id: 2,
        name: "Rohit",
        course: "BTech"
    }
];
```

This is only **temporary in-memory storage**.

### Important limitation

When the server restarts, the data returns to its original state.

A real database will be introduced later.

---

# ⚠️ Common Problems Learned

## `Cannot GET /`

Usually means Express doesn't have a matching GET route.

---

## `Cannot PUT /students/1`

Usually means the method and route do not match.

For example:

```js
router.put("/student/:id")
```

does not match:

```text
PUT /students/1
```

because:

```text
student ≠ students
```

Routes must match exactly.

---

## `req.body` is undefined

Make sure JSON middleware exists:

```js
app.use(express.json());
```

and that it appears before routes that need JSON data.

The client must also send JSON correctly.

---

## `argument handler must be a function`

This can happen when a controller is imported incorrectly.

For example:

```js
const {
    getStudents
} = require("../controllers/studentController");
```

must match the exported name:

```js
module.exports = {
    getStudents
};
```

---

## Function vs Function Call

These are different:

```js
getAllStudents
```

and:

```js
getAllStudents()
```

The first refers to the function.

The second executes the function.

---

# 🧠 Important Express Cheat Sheet

```js
app.get()
```

Handle a GET route.

```js
app.post()
```

Handle a POST route.

```js
app.put()
```

Handle a PUT route.

```js
app.delete()
```

Handle a DELETE route.

```js
app.use()
```

Use middleware.

```js
next()
```

Continue to the next handler.

```js
next(error)
```

Send an error to error-handling middleware.

```js
req.params
```

Get route parameters.

```js
req.query
```

Get query parameters.

```js
req.body
```

Get request body data.

```js
res.send()
```

Send a general response.

```js
res.json()
```

Send a JSON response.

```js
res.status()
```

Set the HTTP status code.

```js
express.Router()
```

Create a separate router.

---

# 🗺️ Learning Roadmap

## Express Fundamentals

- ✅ Express installation
- ✅ Express application
- ✅ Server setup
- ✅ Routes
- ✅ Request / Response
- ✅ HTTP methods
- ✅ Params
- ✅ Query
- ✅ Request body

## Middleware

- ✅ `app.use()`
- ✅ `next()`
- ✅ Custom middleware
- ✅ Logging middleware
- ✅ JSON middleware
- ✅ Validation middleware
- ✅ ID validation middleware

## REST API

- ✅ GET
- ✅ POST
- ✅ PUT
- ✅ DELETE
- ✅ CRUD
- ✅ HTTP status codes

## Project Architecture

- ✅ Express Router
- ✅ Controllers
- ✅ Models
- ✅ MVC-style structure
- ✅ Route → Middleware → Controller → Model

## Error Handling

- ✅ Error middleware
- ✅ `next(error)`
- ✅ 404 handler

## Next

- ⏳ Centralized error handling improvements
- ⏳ Better validation
- ⏳ CORS
- ⏳ Environment variables
- ⏳ Database
- ⏳ Authentication
- ⏳ File uploads
- ⏳ Production structure
- ⏳ Deployment

---

# 🎯 Project Goal

The goal of this project is to evolve a simple learning API into a complete backend application.

Planned architecture:

```text
Client
  ↓
Routes
  ↓
Middleware
  ↓
Controllers
  ↓
Models
  ↓
Database
```

Eventually the temporary JavaScript array will be replaced with a real database.

---

# 📚 Learning Philosophy

This project is being developed incrementally.

Each feature is introduced only after understanding the concept behind it.

The current focus is:

```text
Understand
   ↓
Build
   ↓
Test
   ↓
Fix errors
   ↓
Refactor
```

The API is intentionally being improved step-by-step rather than being built all at once.

---

# 🔧 Useful Development Commands

Start the server:

```powershell
node src/server.js
```

Start with Nodemon:

```powershell
npm run dev
```

Check the current directory:

```powershell
Get-Location
```

Check files:

```powershell
Get-ChildItem
```

Check Git status:

```powershell
git status
```

Add changes:

```powershell
git add .
```

Commit:

```powershell
git commit -m "Your message"
```

Push:

```powershell
git push origin main
```

---

# 🌱 Project Evolution

The project has evolved through these stages:

```text
Basic Node.js Server
        ↓
Express Application
        ↓
Routes
        ↓
Request / Response
        ↓
Params + Query + Body
        ↓
Middleware
        ↓
CRUD
        ↓
Router
        ↓
Controllers
        ↓
Models
        ↓
Validation
        ↓
Error Handling
        ↓
MVC Structure
        ↓
Database
        ↓
Authentication
        ↓
Production API
```

---

# 👨‍💻 Learning Project

Built as part of my backend development learning journey.

### Current Focus

**Express.js**

### Project

**Express Student API**

### Goal

Build a clean understanding of backend architecture and REST API development before moving to databases and full-stack development.

---

## ⭐ Current Architecture

```text
                    ┌──────────────┐
                    │    Client    │
                    │ Thunder      │
                    │ Client       │
                    └──────┬───────┘
                           │
                           ▼
                    ┌──────────────┐
                    │    Routes    │
                    └──────┬───────┘
                           │
                           ▼
                    ┌──────────────┐
                    │ Middleware   │
                    └──────┬───────┘
                           │
                           ▼
                    ┌──────────────┐
                    │ Controllers  │
                    └──────┬───────┘
                           │
                           ▼
                    ┌──────────────┐
                    │    Models    │
                    └──────┬───────┘
                           │
                           ▼
                    ┌──────────────┐
                    │    Data      │
                    └──────────────┘
```

---

# 🚧 Status

This project is actively being developed as I continue learning backend development.

**Express.js → In Progress**

**Next major step → Continue improving the backend architecture**