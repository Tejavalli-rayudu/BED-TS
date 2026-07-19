const studentService = require("../Services/studentService");

const getAllStudents = (req, res) => {
    res.json(studentService.getAllStudents());
};

const addStudent = (req, res) => {
    const student = studentService.addStudent(req.body);

    res.status(201).json({
        message: "Student Added Successfully",
        data: student
    });
};

const getStudentById = (req, res) => {
    const student = studentService.getStudentById(req.params.id);

    if (!student) {
        return res.status(404).json({ message: "Student Not Found" });
    }

    res.json(student);
};

const updateStudent = (req, res) => {
    const student = studentService.updateStudent(req.params.id, req.body);

    if (!student) {
        return res.status(404).json({ message: "Student Not Found" });
    }

    res.json({
        message: "Student Updated Successfully",
        data: student
    });
};

const patchStudent = (req, res) => {
    const student = studentService.patchStudent(req.params.id, req.body);

    if (!student) {
        return res.status(404).json({ message: "Student Not Found" });
    }

    res.json({
        message: "Student Patched Successfully",
        data: student
    });
};

const deleteStudent = (req, res) => {
    const student = studentService.deleteStudent(req.params.id);

    if (!student) {
        return res.status(404).json({ message: "Student Not Found" });
    }

    res.json({
        message: "Student Deleted Successfully",
        data: student
    });
};

module.exports = {
    getAllStudents,
    addStudent,
    getStudentById,
    updateStudent,
    patchStudent,
    deleteStudent
};
