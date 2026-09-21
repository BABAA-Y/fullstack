# 🚀 Express Student API

> A beginner-friendly REST API built with **Node.js + Express.js** while learning backend development step by step.

This project started as a simple Express server and has gradually grown into a structured backend using:

**Routes → Middleware → Controllers → Models**

The goal is not just to build an API, but to understand **why each part exists and how everything connects**.

---

## 📌 Project Status

🟢 **Express.js Fundamentals — Mostly Completed**

🚧 **Project is still under development**

---

# 🛠️ Tech Stack

- 🟢 Node.js
- 🟢 Express.js
- 🟢 JavaScript
- 🟢 Thunder Client
- 🟢 Nodemon
- 🟢 Git & GitHub
- 🟢 VS Code

---

# 📂 Project Structure

```text
express-student-api/
│
├── public/
│   └── index.html
│
├── src/
│   │
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
│   │   ├── studentIdValidation.js
│   │   └── logger.js
│   │
│   ├── models/
│   │   └── studentModel.js
│   │
│   └── errors/
│       └── AppError.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

# 🌱 What I Learned

During this project I learned:

- Express basics
- Express application
- Server setup
- Routes
- HTTP methods
- Request and Response
- Route parameters
- Query parameters
- Request body
- JSON middleware
- Custom middleware
- `next()`
- HTTP status codes
- CRUD
- Express Router
- Controllers
- Models
- MVC-style architecture
- Validation
- ID validation
- Error handling
- Custom errors
- 404 handling
- Async controllers
- CORS
- Environment variables
- Static files
- Logging middleware
- Middleware order
- PATCH requests

---

# ⚡ 1. What is Express?

**Express.js** is a framework for Node.js that makes it easier to build:

- Web servers
- APIs
- REST APIs
- Backend applications

Without Express, handling routes and requests directly with Node's `http` module requires more code.

Express makes the process much simpler.

---

# 🏗️ 2. Creating an Express App

First we load Express:

```js
const express = require("express");
```

Then we create the application:

```js
const app = express();
```

Think of `app` as our main Express application.

We use it to create:

- Routes
- Middleware
- Server configuration

---

# 🌐 3. Starting the Server

Our `server.js`:

```js
const app = require("./app");

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
```

`app.listen()` starts the server and waits for requests.

Example:

```text
http://localhost:5000
```

---

# 📦 4. Exporting and Importing the App

At the end of `app.js`:

```js
module.exports = app;
```

Then in `server.js`:

```js
const app = require("./app");
```

This allows us to keep **application configuration** and **server startup** in separate files.

---

# 🛣️ 5. Routes

A route tells Express:

> "When this HTTP method and URL are requested, run this code."

Example:

```js
app.get("/", (req, res) => {
    res.send("Hello from Ayush");
});
```

---

# 🔵 6. GET

`GET` is generally used to **read or retrieve data**.

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

# 🟢 7. POST

`POST` is generally used to **create or send data**.

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

# 🟡 8. PUT

`PUT` is generally used to **update an existing resource**.

Example:

```js
app.put("/students/:id", (req, res) => {
    const id = Number(req.params.id);

    // update student
});
```

---

# 🟠 9. PATCH

`PATCH` is generally used for a **partial update**.

Example:

```text
PATCH /students/1
```

Body:

```json
{
    "course": "BCA CSE"
}
```

Only the provided field is changed.

### PUT vs PATCH

```text
PUT   → update the resource as a whole
PATCH → update only the fields provided
```

---

# 🔴 10. DELETE

`DELETE` is used to remove data.

Example:

```js
app.delete("/students/:id", (req, res) => {
    const id = Number(req.params.id);

    // delete student
});
```

---

# 🔄 11. CRUD

CRUD means:

```text
C → Create
R → Read
U → Update
D → Delete
```

Our API uses:

| Operation | Method | Endpoint |
|---|---|---|
| Create | POST | `/students` |
| Read | GET | `/students` |
| Read One | GET | `/students/:id` |
| Update | PUT | `/students/:id` |
| Partial Update | PATCH | `/students/:id` |
| Delete | DELETE | `/students/:id` |

---

# 📥 12. Request and Response

Express routes commonly receive:

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

## `res`

`res` means **response**.

It is used to send data back to the client.

Examples:

```js
res.send()
res.json()
res.status()
```

---

# 🔢 13. Route Parameters

Route parameters are values inside the URL path.

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

gets:

```text
"5"
```

### Easy way to remember

```text
/students/5
          ↑
      req.params
```

Route parameters are useful for identifying a specific resource.

Examples:

```text
/students/1
/students/2
/students/100
```

---

# ❓ 14. Query Parameters

Query parameters come after `?`.

Example:

```text
/students?course=BCA
```

Access them with:

```js
req.query.course
```

Example:

```js
app.get("/search", (req, res) => {
    const course = req.query.course;

    res.send(`Course: ${course}`);
});
```

Multiple query parameters are possible:

```text
/students?course=BCA&year=1
```

Then:

```js
req.query.course
req.query.year
```

---

# 🔀 15. Params vs Query

### Params

```text
/students/5
          ↑
      req.params
```

Used to identify a specific resource.

### Query

```text
/students?course=BCA
         ↑
      req.query
```

Used for things like:

- Searching
- Filtering
- Sorting
- Optional information

### Easy memory

```text
PARAM → part of the URL path

QUERY → information after ?
```

---

# 🧾 16. Request Body

The request body contains data sent by the client.

Example:

```json
{
    "name": "Ayush",
    "course": "BCA"
}
```

Access it using:

```js
req.body
```

For example:

```js
req.body.name
```

returns:

```text
Ayush
```

---

# 🧩 17. `express.json()`

To allow Express to read JSON request bodies:

```js
app.use(express.json());
```

This is middleware.

### Flow

```text
Client
   ↓
JSON Body
   ↓
express.json()
   ↓
req.body
   ↓
Route / Controller
```

Without it, JSON request data may not be available in `req.body`.

---

# 🧰 18. Middleware

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
    console.log("Middleware running");
    next();
});
```

---

# ➡️ 19. `next()`

`next()` simply means:

> **Continue to the next step.**

Example:

```js
app.use((req, res, next) => {
    console.log("Checking...");
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
Next middleware / route
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

# 🌍 20. `app.use()` vs `app.get()`

### `app.get()`

Handles a specific GET route:

```js
app.get("/students", (req, res) => {
    res.json([]);
});
```

### `app.use()`

Used mainly for middleware:

```js
app.use((req, res, next) => {
    console.log("Middleware");
    next();
});
```

### Easy memory

```text
app.get() → specific GET route

app.use() → middleware in the request flow
```

---

# 📝 21. Logging Middleware

We created a reusable logger:

```js
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

module.exports = logger;
```

Then:

```js
app.use(logger);
```

Now requests can appear like:

```text
GET /students
POST /students
PUT /students/1
DELETE /students/1
```

This avoids writing logging code in every route.

---

# 🔢 22. Middleware Order

Express processes middleware **from top to bottom**.

Example:

```js
app.use(cors());
app.use(express.json());
app.use(logger);

app.use("/students", router);
```

The request goes through these in order.

### Important rule

> **The order of middleware and routes matters.**

For example:

```js
router.get("/async-error", testAsyncError);
router.get("/:id", validateIdStudent, getStudent);
```

The specific route should come before the dynamic route.

Otherwise:

```text
/async-error
```

could be treated as:

```text
/:id
```

---

# 🛡️ 23. Validation

Validation means:

> **Check whether incoming data is acceptable before using it.**

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

Flow:

```text
Request
   ↓
Validation
   ↓
Valid? ── No → 400
   │
  Yes
   ↓
next()
   ↓
Controller
```

---

# 🔗 24. Reusing Middleware

The same middleware can be reused on multiple routes.

Example:

```js
router.post("/", validateStudent, postStudent);

router.put(
    "/:id",
    validateIdStudent,
    validateStudent,
    putStudent
);
```

This avoids repeating the same validation code.

---

# 🔢 25. ID Validation

Route parameters are strings.

Example:

```text
/students/5
```

gives:

```js
req.params.id
```

as:

```text
"5"
```

We convert it:

```js
Number(req.params.id)
```

If the user sends:

```text
/students/abc
```

then:

```js
Number("abc")
```

becomes:

```text
NaN
```

We can detect that with:

```js
Number.isNaN(id)
```

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

# 📊 26. HTTP Status Codes

Status codes tell the client what happened.

| Code | Meaning |
|---|---|
| `200` | OK |
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

# ❌ 27. 404 Handler

A 404 handler deals with routes that don't exist.

```js
app.use((req, res, next) => {
    next(new AppError("Route not found", 404));
});
```

So:

```text
GET /abc
```

can result in:

```json
{
    "message": "Route not found"
}
```

---

# 💥 28. Error Handling Middleware

Error-handling middleware has **four parameters**:

```js
(err, req, res, next)
```

Example:

```js
app.use((err, req, res, next) => {
    console.log(err.message);

    res.status(err.statusCode || 500).json({
        message: err.message || "Something went wrong"
    });
});
```

---

# ⚠️ 29. `next()` vs `next(error)`

Normal:

```js
next();
```

means:

```text
Continue normally
```

Error:

```js
next(error);
```

means:

```text
Send this error to the error handler
```

---

# 📦 30. Custom `AppError`

We created our own error class:

```js
class AppError extends Error {
    constructor(message, statusCode) {
        super(message);

        this.statusCode = statusCode;
        this.isOperational = true;
    }
}

module.exports = AppError;
```

It allows us to store:

```text
message
statusCode
```

Example:

```js
throw new AppError("Student not found", 404);
```

Now the error contains:

```text
message    → Student not found
statusCode → 404
```

---

# 🧠 31. Why `AppError`?

Without `AppError`:

```js
return res.status(404).json({
    message: "Student not found"
});
```

The controller creates the response itself.

With `AppError`:

```js
throw new AppError("Student not found", 404);
```

The controller reports the error.

The central error handler creates the response.

### Flow

```text
Controller
    ↓
throw AppError
    ↓
Central Error Handler
    ↓
Response
```

---

# ⚡ 32. Async Controllers

Express controllers can also be asynchronous.

Example:

```js
const testAsync = async (req, res) => {
    const message = await Promise.resolve(
        "Async controller works!"
    );

    res.json({
        message: message
    });
};
```

The important part is:

```js
async
```

and:

```js
await
```

This becomes especially important when working with databases.

---

# 💥 33. Async Errors

An async controller can throw an error:

```js
const testAsyncError = async (req, res) => {
    throw new AppError(
        "Async error happened",
        500
    );
};
```

The error can reach the centralized error-handling flow.

---

# 🛣️ 34. Express Router

As the project grows, putting every route in `app.js` becomes messy.

Express provides:

```js
express.Router()
```

to organize routes.

Example:

```js
const express = require("express");

const router = express.Router();
```

---

# 🔗 35. Router Prefixes

In `app.js`:

```js
app.use("/students", router);
```

Inside the router:

```js
router.get("/");
```

Together they create:

```text
GET /students
```

And:

```js
router.get("/:id");
```

becomes:

```text
GET /students/:id
```

### Easy idea

```text
app.use("/students", router)
            +
router.get("/")
            ↓
GET /students
```

---

# 🎯 36. Routes + Controllers

Instead of putting everything inside a route:

```js
router.get("/", (req, res) => {
    // lots of logic
});
```

we create a controller:

```js
const getStudents = (req, res) => {
    res.json(getAllStudents());
};
```

Then the route becomes:

```js
router.get("/", getStudents);
```

### Easy memory

```text
Routes      → Where should the request go?
Controllers → What should happen?
```

---

# 🗃️ 37. Models

A Model manages application data.

Our model currently uses a JavaScript array:

```js
const students = [];
```

The data is temporary.

Example:

```js
const getAllStudents = () => {
    return students;
};
```

---

# 📤 38. Model Functions

Instead of letting controllers directly change the data, the Model provides functions.

Examples:

```js
getAllStudents()
```

```js
createStudent(name, course)
```

```js
getStudentById(id)
```

```js
updateStudent(id, name, course)
```

```js
patchStudent(id, data)
```

```js
deletedStudent(id)
```

This keeps data operations inside the Model.

---

# 🔄 39. MVC-Style Architecture

Our project now follows a simple MVC-style architecture:

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

Decides **where** the request goes.

### Middleware

Checks or processes the request.

### Controller

Handles the request logic.

### Model

Works with the data.

---

# 🧪 40. Thunder Client

Thunder Client is used to test the API without building a frontend.

Base URL:

```text
http://localhost:5000
```

---

## GET All Students

```text
GET /students
```

---

## GET One Student

```text
GET /students/1
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

---

## PATCH Student

```text
PATCH /students/1
```

Body:

```json
{
    "course": "BCA CSE"
}
```

---

## DELETE Student

```text
DELETE /students/1
```

No body is required for the current implementation.

---

# 🌐 41. CORS

CORS stands for:

**Cross-Origin Resource Sharing**

It is mainly a browser security mechanism that controls which origins are allowed to access a server from a different origin.

Example:

```text
Frontend
http://localhost:5173

Backend
http://localhost:5000
```

These are different origins.

---

# 🔓 42. Basic CORS

CORS can be enabled with:

```js
const cors = require("cors");

app.use(cors());
```

---

# 🔐 43. Restricted CORS

Instead of allowing every origin, we configured:

```js
app.use(cors({
    origin: process.env.FRONTEND_URL
}));
```

And in `.env`:

```env
FRONTEND_URL=http://localhost:5173
```

This makes the allowed frontend configurable.

---

# 🧠 44. CORS and Thunder Client

CORS is mainly enforced by browsers.

So it is possible to see:

```text
✅ Thunder Client works
❌ Browser frontend gets a CORS error
```

This doesn't automatically mean the API is broken.

---

# ⚙️ 45. Environment Variables

Environment variables allow configuration and sensitive values to stay outside the source code.

Example:

```env
PORT=5000
FRONTEND_URL=http://localhost:5173
```

Access them with:

```js
process.env.PORT
```

and:

```js
process.env.FRONTEND_URL
```

---

# 🔐 46. Why `.env`?

Later we may have values such as:

```env
PORT=5000
DATABASE_URL=...
JWT_SECRET=...
API_KEY=...
```

These shouldn't be hard-coded directly into the application.

---

# 🚫 47. Never Commit `.env`

`.env` should be listed in `.gitignore`:

```text
node_modules/
.env
*.log
```

This prevents private environment values from being added to Git.

---

# ▶️ 48. Loading `.env`

Node can load the `.env` file using:

```powershell
node --env-file=.env src/server.js
```

Our development script uses the same idea:

```text
nodemon --exec "node --env-file=.env" src/server.js
```

So:

```text
.env
 ↓
process.env
 ↓
Application
```

---

# 📁 49. Static Files

Express can serve files using:

```js
app.use(express.static("public"));
```

Our folder:

```text
public/
└── index.html
```

can then be served by Express.

This is useful for:

- HTML
- CSS
- JavaScript
- Images
- Other static files

---

# 📝 50. Middleware for Static Files

The request flow can look like:

```text
Request
   ↓
express.static()
   ↓
File found?
   ├── Yes → Serve file
   └── No  → Continue
              ↓
           API routes
```

So static files and API routes can exist in the same Express application.

---

# 🧠 51. Important JavaScript Concepts Used

## `typeof`

Checks the data type:

```js
typeof "Ayush"
```

→ `"string"`

```js
typeof 123
```

→ `"number"`

---

## `Number()`

Converts a value to a number:

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

Checks whether a value is `NaN`:

```js
Number.isNaN(id)
```

---

## `trim()`

Removes extra spaces:

```js
"   Ayush   ".trim()
```

→

```text
Ayush
```

---

## `find()`

Finds the first matching item:

```js
students.find(student => student.id === id);
```

---

## `findIndex()`

Returns the index of a matching item:

```js
students.findIndex(student => student.id === id);
```

Returns:

```text
0, 1, 2... → found
-1          → not found
```

---

## `splice()`

Changes the original array:

```js
students.splice(index, 1);
```

This removes one item.

---

## `slice()` vs `splice()`

### `slice()`

Copies part of an array.

```js
students.slice(index, 1);
```

Does **not** remove the item.

### `splice()`

Changes the original array.

```js
students.splice(index, 1);
```

Removes the item.

---

# ⚠️ 52. Common Errors We Fixed

## `Cannot GET /`

Usually means no matching GET route exists.

---

## `Cannot PUT /students/1`

The method or path didn't match the route.

For example:

```js
router.put("/student/:id");
```

doesn't match:

```text
PUT /students/1
```

---

## `req.body` is undefined

Make sure:

```js
app.use(express.json());
```

is added before the routes that need JSON.

---

## `argument handler must be a function`

Usually means the imported controller is not actually a function.

Example:

```js
const { getStudents } = require("../controllers/studentController");
```

must match the exported name:

```js
module.exports = {
    getStudents
};
```

---

## `students is not defined`

After moving data into the Model, the controller should use Model functions instead of directly accessing:

```js
students
```

---

## Route order problem

A dynamic route like:

```js
router.get("/:id", ...)
```

can match:

```text
/async-error
```

so specific routes should usually appear before broad dynamic routes.

---

# 🔄 53. Complete Request Flow

For example:

```text
POST /students
       ↓
       Route
       ↓
Validation Middleware
       ↓
    Controller
       ↓
      Model
       ↓
      Data
       ↓
    Controller
       ↓
    Response
```

For an error:

```text
Request
   ↓
Controller
   ↓
throw AppError
   ↓
Central Error Handler
   ↓
Response
```

---

# 🧭 54. Current API

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/students` | Get all students |
| GET | `/students/:id` | Get one student |
| POST | `/students` | Create student |
| PUT | `/students/:id` | Update student |
| PATCH | `/students/:id` | Partially update student |
| DELETE | `/students/:id` | Delete student |

---

# 🗺️ 55. Learning Roadmap

### ✅ Completed

```text
Express Basics
    ↓
Routes
    ↓
Request / Response
    ↓
Params
    ↓
Query
    ↓
Body
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
CORS
    ↓
Environment Variables
    ↓
Static Files
    ↓
Logging
    ↓
Async Controllers
    ↓
PATCH
    ↓
MVC-style structure
```

### 🔜 Next

```text
Database Integration
      ↓
MySQL / MongoDB
      ↓
Authentication
      ↓
JWT
      ↓
CORS Improvements
      ↓
File Uploads
      ↓
Production Structure
      ↓
Deployment
```

---

# 💾 56. Current Data Storage

At the moment, student data is stored in a JavaScript array:

```js
const students = [];
```

This is temporary **in-memory storage**.

That means restarting the server resets the data.

Example:

```text
Start server
   ↓
students = []
   ↓
Create students
   ↓
Data exists
   ↓
Restart server
   ↓
students = []
```

A database will solve this later.

---

# 📜 57. Useful Commands

## Install Express

```powershell
npm install express
```

## Install Nodemon

```powershell
npm install --save-dev nodemon
```

## Start normally

```powershell
npm start
```

## Start development server

```powershell
npm run dev
```

## Check current folder

```powershell
Get-Location
```

## List files

```powershell
Get-ChildItem
```

---

# 🌱 58. Project Evolution

This project has evolved like this:

```text
Simple Node.js Server
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
Express Router
        ↓
Controllers
        ↓
Models
        ↓
Validation
        ↓
Error Handling
        ↓
CORS
        ↓
Environment Variables
        ↓
Static Files
        ↓
Logging
        ↓
Async Controllers
        ↓
PATCH
        ↓
MVC-style Architecture
        ↓
Database
        ↓
Authentication
        ↓
Production Backend
```

---

# 🎯 59. Main Goal

The goal of this project is to turn a simple learning API into a proper backend application.

The planned architecture is:

```text
                    Client
                       │
                       ▼
                    Routes
                       │
                       ▼
                  Middleware
                       │
                       ▼
                  Controllers
                       │
                       ▼
                     Models
                       │
                       ▼
                    Database
```

---

# ⭐ 60. Final Learning Notes

The most important Express concepts learned so far:

```text
app.get()      → GET route
app.post()     → POST route
app.put()      → PUT route
app.patch()    → PATCH route
app.delete()   → DELETE route

req.params     → route parameters
req.query      → query parameters
req.body       → request body

res.send()     → send a response
res.json()     → send JSON
res.status()   → set status code

app.use()      → middleware
next()         → continue to next handler
next(error)    → send error to error handler

express.json() → read JSON request bodies
express.Router() → organize routes

Route          → where the request goes
Middleware     → checks/processes request
Controller     → handles request logic
Model          → handles data
```

---

# 👨‍💻 Learning Project

**Project:** Express Student API

**Focus:** Express.js + REST API + Backend Architecture

**Current Stage:** 🚧 Under Development

Built while learning backend development step by step.

---

## ⭐ Keep Learning. Keep Building.

```text
Learn → Build → Test → Break → Fix → Refactor → Repeat
```
