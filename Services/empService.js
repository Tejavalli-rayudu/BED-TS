const employees = require("../emp");

// DELETE
const deleteEmployee = (id) => {

    const index = employees.findIndex(emp => emp.id === Number(id));

    if (index === -1) {
        return null;
    }

    const deletedEmployee = employees.splice(index, 1)[0];

    return deletedEmployee;
};
module.exports = {

    deleteEmployee
};