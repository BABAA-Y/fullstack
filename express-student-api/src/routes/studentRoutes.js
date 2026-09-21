// const express = require('express');
// const router = express.Router();

// router.get('/:id', (req, res) => {
//     const id = req.params.id;
    
//     res.send(`Student ID: ${id}`)
// });

// router.post('/', (req, res) => {
//     const name = req.body.name;
//     const course = req.body.course;

//     res.json({
//         message: "studnet recived",
//         name: name,
//         course: course
//     })
// });

// router.put('/:id', (req, res) => {
//     const id = Number(req.params.id);

//     res.json({
//         message: "student update route",
//         id: id
//     });
// });

// router.delete('/:id', (req, res) => {
//     const id = Number(req.params.id);

//     res.json({
//         message: "student delete route",
//         id: id
//     })
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const { getStudents, postStudent, putStudent, deletedStudentController, getStudent } = require("../controller/studentController");
const validateStudent = require('../middleware/studentvalidation');
const validateIdStudent = require('../middleware/studentIdValidation');


router.get('/', getStudents);

router.get('/:id', validateIdStudent, getStudent);

router.post('/',validateStudent, postStudent);

router.put('/:id',validateStudent,validateIdStudent, putStudent);

router.delete('/:id',validateIdStudent, deletedStudentController);

module.exports = router;