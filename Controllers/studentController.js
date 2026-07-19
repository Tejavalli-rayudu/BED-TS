const studentService = require("../services/studentService");

// POST Student
const addStudent = (req, res) => {

    const newStudent = req.body;

    const student = studentService.addStudent(newStudent);

    res.status(201).json({
        message: "Student Added Successfully",
        data: student
    });

};

