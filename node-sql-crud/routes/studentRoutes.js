const express = require('express');
const { getStudents, getStudentId, createStudent, updateStudent, deleteStudent } = require('../controllers/studentController');

// router object 
const router = express.Router();

// routes 

// get all student list  || GET
router.get('/getAll', getStudents)

// get student by id 
router.get ('/get/:id', getStudentId)

// create student || post 
router.post('/create', createStudent);

// update student || put
router.put('/update/:id', updateStudent);

// dlt student || delete
router.delete('/delete/:id', deleteStudent);

module.exports = router