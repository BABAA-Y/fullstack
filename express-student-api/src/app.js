// const router = require("./routes/studentRoutes")

// const express = require("express"); // load express packges

// const app = express(); // create express application

// app.use(express.json()); // it tell express to understand json //! Read JSON sent by the client

// # GET handles a specific GEt request
// this means:
// ! It only responds to a GET request that matches its route. (like a user trying to load a page)
// $ in simple word its only work when the dev send only the get req

// app.get("/", (req, res)=>{
//     res.send("Hello from ayush");
// })

// app.get("/student", (req,res)=>{ // student route json
//     res.json([
//         {
//             id: 1, 
//             name: "Ayush",
//             course: "BCA"
//         },
//         {
//             id: 2, 
//             name: "Rahul",
//             course: "BTech"
//         }
//     ]);
// });

// app.get("/hello", (req, res)=>{ // studnet hello route 
//     console.log("request recived");
//     console.log(req.method); // request method (get, post, put, delete)
//     console.log(req.url); // request url

//     res.send("hello")
// });

// app.get("/students/:id", (req,res)=>{
//     const id = req.params.id;   // param that acts like a blanck placeholder for specific item if or name  "/students/:id"

//     res.send(`your req student with ID: ${id}`)
// });

// app.get("/search", (req, res) => {
//     const course = req.query.course; // query is a way to send extra information inside web adress "/search?extra-info"

//     res.send(`You searched for course: ${course}`);
// });



// # 200 → Success
// # 201 → Created
// # 400 → Bad request
// # 404 → Not found
// # 500 → Server error

// app.get("/test", (req, res)=>{
//     res.status(200).send("everything is ok")
// });

// app.get("/created", (req, res)=>{
//     res.status(201).json({
//         message: "student created"
//     })
// })

// app.get("/students/abc", (req, res) => {
// res.status(404).json({
//     message: "Not found"
// });
// });

// app.get("/error", (req, res)=>{
//     res.status(500).json({
//         message: "something went wrong"
//     });
// })



// #  app.use() is middleware, so it can run for many HTTP methods and routes:

// Client
//   ↓
// Middleware
//   ↓
// Route
//   ↓
// Response


// app.use((req, res, next)=>{
//     console.log("Method:", req.method);
//     console.log("URL:", req.url);
    
    
    
//     next(); // without this the middleware is gonna stop // # checkpoint
// });

// app.use((req, res, next)=>{
//     console.log("Checking request....");

//     if(req.query.key !== "123"){
//         return res.status(401).json({
//             message: "Access denied"
//         })
//     }

//     next();
// })


// # POST Request - it send data to the server

// app.post("/students", (req, res)=>{ // create a post route
//     const name = req.body.name; // get a student name // ! Get the data sent by the client
//     const course = req.body.course; // get studnet course

//     res.json({  // Send JSON back to the client
//         message: "student recived",
//         name: name,
//         course: course
//     });
// });

// # PUT Request - update the existing data

// app.put("/students/:id", (req, res)=>{
//     const id = req.params.id;
//     const name = req.body.name;
//     const course = req.body.course;

//     res.json({
//         message: "student updated",  
//         id: id,
//         name: name,
//         course: course
//     });
// });


// const students = [
//     {
//         id: 1,
//         name: "ayush",
//         course: "bca"
//     },
//     {
//         id: 2,
//         name: "rohit",
//         course: "btech"
//     }
// ];

// app.put("/student/:id", (req, res)=>{
//     const id = Number(req.params.id);
//     const student = students.find(student => student.id === id);

//     if(!student){
//         return res.status(404).json({
//             message: "student not found"
//         });
//     };

//     student.name = req.body.name;
//     student.course = req.body.course;

//     res.json({
//         message: "student updated",
//         student: student
//     })
// });



// const students = [
//     { id: 1, name: "ayush", course: "bca" },
//     { id: 2, name: "rohit", course: "btech" }
// ];


// app.delete("/students/:id", (req, res)=>{
//     const id = Number(req.params.id);

//     const index = students.findIndex(student => student.id === id); //# It searches for the student and gives us its position in the array.

//     if(index === -1){
//         return res.status(404).json({
//             message: "studnet not found"
//         });
//     };

//     students.splice(index, 1);

//     res.json({
//         message: "student deleted"
//     });
// });



// module.exports = app; // export the app so we can use it to server.js






const express = require('express');
const app = express();

app.use(express.json());

const router = require("./routes/studentRoutes");

app.use("/students", router);

module.exports = app;