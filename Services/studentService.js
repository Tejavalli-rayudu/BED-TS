const students = require("../students");

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
