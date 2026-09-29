// GET All student list 

const db = require("../config/db");

const getStudents = async (req, res) =>{
    try {
        
        const [data] =  await db.query(' select * from student ')
        if(!data){
            return res.status(404).send(
                {
                    success: false,
                    message: "no data found"
                }
            );
        }

        res.status(200).send({
            success:true,
            message: "all student record",
            totalstudnet: data.length,
            data
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false, 
            message: 'error in get  all student api',
            error
        });
    }
};

// get student by id 
const getStudentId = async (req, res) =>{
    try {
            const studentId = req.params.id
            if (!studentId) {
                return res.send(404).send({
                    success: false,
                    message: "invalid student id"
                })
            }

            // const data = await db.query(`select * from student where id = `+studentId)
            const [data] = await db.query('select * from student where id=?',[studentId])
            if (!data) {
                return res.status(404).send({
                    success: false,
                    message: "error in get student by id api",
                    error  
                });
            }

            res.status(200).send({
                success: true,
                studentDetails: data
            })
    } catch (error) {
        console.error(error)
        res.status(500).send({
            success: false,
            message: 'error in get student by id api',
            error
        })
    }
}


// create studnet 

const createStudent = async (req, res) => {
    try {

        const {name,rollno, class: studentClass, fees, medium} =  req.body 
        if (!name || !rollno || !studentClass || !fees || !medium) {
            return res.status(500).send({
                success: false,
                message: "pelese provide all fields"
            })
        }

        const [data]  = await db.query(`insert into student (name, rollno, Class, fees, medium) values (?, ?, ?, ?, ?)`, [name,rollno, studentClass, fees, medium])
        if(!data){
            return res.status(404).send(
                {
                    success: false,
                    message: "error in insert query"
                }
            );
        }

        res.status(201).send({
            success: true,
            message: 'new student record created'
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "error in create student api",
            error
        })
    }
}

// update student
const updateStudent = async (req, res) =>{
    try {
            const studentId = req.params.id
            if (!studentId) {
                return res.send(404).send({
                    success: false,
                    message: "invalid student id"
                })
            }

            const {name, rollno, class: studentClass, fees, medium} = req.body
            const data = await db.query(`update student set name = ?, rollno = ? , class = ?, fees = ? , medium = ? where id = ?`, [name, rollno, studentClass, fees, medium, studentId])
            if (!data) {
                return res.status(500).send({
                    success: false,
                    message: "error in update data"
                });
            }

            res.status(200).send({
                success: true,
                messages: "student details updated"
            })
    } catch (error) {
        console.error(error)
        res.status(500).send({
            success: false,
            message: 'error in update student by id api',
            error
        })
    }
}

const deleteStudent = async (req, res) => {
    try {

            const studentId = req.params.id
            if (!studentId) {
                return res.send(404).send({
                    success: false,
                    message: "invalid student id"
                })
            }

            await db.query(`delete from student where id = ?`, [studentId])

            res.status(200).send({
                success: true,
                message: "error in dlting student api",
            })
        
    } catch (error) {
        console.error(error)
        res.status(500).send({
            success: false,
            message: 'error in delete student by id api',
            error
        })
    }
} 

module.exports = { getStudents, getStudentId, createStudent, updateStudent, deleteStudent };