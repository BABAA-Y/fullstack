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



router.get('/', (req, res) => {
    res.json(students);
});

router.post('/', (req, res) => {
    const name = req.body.name;
    const course = req.body.course;

    const newStudent = {
        id: students.length + 1,
        name: name,
        course: course
    }

    students.push(newStudent);

    res.status(201).json({
        message: "student created",
        student: newStudent 
    });
});

router.put('/:id', (req, res) => {
    const id =  Number(req.params.id);

    const student = students.find(student => student.id === id)

    if (!student) {
        return res.status(404).json({
            message: "Student not found",
        });
    };

    student.name = req.body.name;
    student.course = req.body.course;

     res.json({
        message: "studnet updated",
        student: student
     });
});

router.delete('/:id', (req, res)=>{
    const id = Number(req.params.id);

    const index = students.findIndex(student => student.id === id);
    
    if (index === -1 || index > students.length) {
        return res.status(404).json({
            message: "student not found"
        });
    }

    const deletedStudent = students.splice(index, 1)

    res.json({
        message: "Student Deleted",
        student: deletedStudent[0]
    })
})

module.exports = router;