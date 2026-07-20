const employees = require("../emp");


// PUT
const updateEmployee = (id, updatedEmployee) => {

    const index = employees.findIndex(emp => emp.id === Number(id));

    if (index === -1) {
        return null;
    }

    employees[index] = updatedEmployee;

    return employees[index];
};

// PATCH
const patchEmployee = (id, data) => {

    const employee = employees.find(emp => emp.id === Number(id));

    if (!employee) {
        return null;
    }

    Object.assign(employee, data);

    return employee;
};

module.exports = {

    updateEmployee,
    patchEmployee
};