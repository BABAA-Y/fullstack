const {
    getAllStudents,
    createStudent,
    updateStudent,
    deletedStudent
} = require("../models/studentModles");

const getStudents = (req, res)=>{
     res.json(getAllStudents());
};

const postStudent = (req, res) => {
    const { name, course } = req.body;

    const newStudent = createStudent(name, course);

    res.status(201).json({
        message: "student created",
        student: newStudent 
    });
} 

const putStudent = (req, res) => {
    const id =  Number(req.params.id);

    const { name, course } = req.body;

    const student = updateStudent(id, name, course);

    if (!student) {
    return res.status(404).json({
        message: "Student not found"
    });
    }

     res.json({
        message: "studnet updated",
        student: student
     });
}

const deletedStudentController = (req, res)=>{
    const id = Number(req.params.id);

    const student = deletedStudent(id);
    
    if (!student) {
        return res.status(404).json({
            message: "student not found"
        });
    }

    res.json({
        message: "Student Deleted",
        student: student
    })
}

module.exports = {
    getStudents, postStudent, putStudent, deletedStudentController
};