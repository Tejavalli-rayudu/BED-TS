const studentService = require("../services/studentService");

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