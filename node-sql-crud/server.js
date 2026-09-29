const express = require('express');
const color = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const pool = require('./config/db');

// # configure dotenv
dotenv.config()

// # rest object
const app = express();

// ! middleware
app.use(morgan("dev"));
app.use(express.json());

// # routes
app.use('/api/v1/student', require('./routes/studentRoutes'))

app.get("/test", (req, res) =>{
    res.status(200).send('<h1>Hwllo </h1>')
})

// # ports
const PORT = process.env.PORT || 8000;

// # contidioanaly listen
pool.query("SELECT 1").then(() =>{
// $ MY SQL
console.log("connected".bgCyan)

// # listen
app.listen(PORT, () =>{
    console.log(`server running on ${PORT}`.bgGreen);
});

})
.catch((error) => {
    console.log("error");
})