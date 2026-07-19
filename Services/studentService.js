const students = require("../students");

// POST Student
const addStudent = (student) => {

    students.push(student);

    return student;

};

