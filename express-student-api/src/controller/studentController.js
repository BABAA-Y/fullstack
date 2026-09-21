const AppError = require("../errors/AppError");
const {
    getAllStudents,
    createStudent,
    updateStudent,
    deletedStudent,
    getStudentById
} = require("../models/studentModles");

const getStudents = (req, res)=>{
     res.json(getAllStudents());
};

const getStudent = (req, res) =>{
    const id = Number(req.params.id)
    const student = getStudentById(id);
    
    if (!student) {
        throw new AppError("Stundet not found", 404);
    }
    res.json(student);
}

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
        throw new AppError("Student not found", 404);
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
        throw new AppError("Studnet Not Found", 404);
    }

    res.json({
        message: "Student Deleted",
        student: student
    })
}

module.exports = {
    getStudents, postStudent, putStudent, deletedStudentController, getStudent
};