const studentService = require("../services/studentService");

//delete
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
