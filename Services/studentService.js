const students = require("../students");

// GET All Students
const getAllStudents = () => {
    return students;
};

// GET Student By ID
const getStudentById = (id) => {
    return students.find(student => student.id === Number(id));
};