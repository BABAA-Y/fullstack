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

const getStudents = (req, res)=>{
     res.json(students);
};

const postStudent = (req, res) => {
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
} 

const putStudent = (req, res) => {
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
}

const deletedStudent = (req, res)=>{
    const id = Number(req.params.id);

    const index = students.findIndex(student => student.id === id);
    
    if (index === -1) {
        return res.status(404).json({
            message: "student not found"
        });
    }

    const deletedStudent = students.splice(index, 1)

    res.json({
        message: "Student Deleted",
        student: deletedStudent[0]
    })
}

module.exports = {
    getStudents, postStudent, putStudent, deletedStudent
};