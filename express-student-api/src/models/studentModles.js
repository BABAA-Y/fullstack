const students = [];

const getAllStudents = () => {
    return students;
}

const createStudent = (name, course) => {
    const newStudent = {
        id: students.length + 1,
        name: name,
        course: course
    };

    students.push(newStudent);

    return newStudent;
};

const updateStudent = (id, name, course)=>{
    const student = (students.find(student => student.id === id))

    if (!student) {
        return null;
    }

    student.name = name;
    student.course = course;

    return student;
}

const deletedStudent = (id)=>{
    const index = students.findIndex(student => student.id === id)

    if (index === -1) {
        return null;
    }

    const deletedStudent = students.splice(index, 1);
    return(deletedStudent[0]);
};

module.exports = {
    getAllStudents,
    createStudent,
    updateStudent,
    deletedStudent
}