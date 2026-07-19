const students = require("../students");

// DELETE
const deleteStudent = (id) => {
    const index = students.findIndex(student => student.id === Number(id));

    if (index === -1) {
        return null;
    }

    return students.splice(index, 1)[0];
};