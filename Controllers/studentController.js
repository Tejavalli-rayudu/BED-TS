const studentService = require("../services/studentService");

// GET All Students
const getAllStudents = (req, res) => {
    const students = studentService.getAllStudents();

    res.status(200).json(students);
};

// GET Student By ID
const getStudentById = (req, res) => {
    const id = req.params.id;

    const student = studentService.getStudentById(id);

    if (!student) {
        return res.status(404).json({
            message: "Student Not Found"
        });
    }

    res.status(200).json(student);
};

module.exports = {
    getAllStudents,
    getStudentById
};