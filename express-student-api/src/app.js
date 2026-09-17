const express = require("express"); // load express packges

const app = express(); // create express application

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

app.get("/test", (req, res)=>{
    res.status(200).send("everything is ok")
});

app.get("/created", (req, res)=>{
    res.status(201).json({
        message: "student created"
    })
})

app.get("/students/abc", (req, res) => {
res.status(404).json({
    message: "Not found"
});
});

app.get("/error", (req, res)=>{
    res.status(500).json({
        message: "something went wrong"
    });
})



// #  app.use() is middleware, so it can run for many HTTP methods and routes:

// Client
//   ↓
// Middleware
//   ↓
// Route
//   ↓
// Response


app.use((req, res, next)=>{
    console.log("Method:", req.method);
    console.log("URL:", req.url);
    
    
    
    next(); // without this the middleware is gonna stop // # checkpoint
});

app.use((req, res, next)=>{
    console.log("Checking request....");

    if(req.query.key !== "123"){
        return res.status(401).json({
            message: "Acess denied"
        })
    }

    next();
})


module.exports = app; // export the app so we can use it to server.js