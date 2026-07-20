const students = require("../students");

// GET ALL
const getAllStudents = () => {
    return students;
};

// POST
const addStudent = (student) => {
    students.push(student);
    return student;
};

// GET BY ID
const getStudentById = (id) => {
    return students.find(student => student.id === Number(id));
};

// PUT
const updateStudent = (id, updatedStudent) => {
    const index = students.findIndex(student => student.id === Number(id));

    if (index === -1) {
        return null;
    }

    students[index] = updatedStudent;

    return students[index];
};

// PATCH
const patchStudent = (id, data) => {
    const student = students.find(student => student.id === Number(id));

    if (!student) {
        return null;
    }

    Object.assign(student, data);

    return student;
};

// DELETE
const deleteStudent = (id) => {
    const index = students.findIndex(student => student.id === Number(id));

    if (index === -1) {
        return null;
    }

    return students.splice(index, 1)[0];
};

const getStudentsByQuery = (course) => {

    if (course) {
        return students.filter(student => student.course === course);
    }

    return students;
};


module.exports = {
    getAllStudents,
    addStudent,
    getStudentById,
    updateStudent,
    patchStudent,
    deleteStudent,
    getStudentsByQuery
};