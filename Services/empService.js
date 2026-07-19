const employees = require("../emp");

// GET ALL
const getAllEmployees = () => {
    return employees;
};

// POST
const addEmployee = (employee) => {
    employees.push(employee);
    return employee;
};

// GET BY ID
const getEmployeeById = (id) => {
    return employees.find(emp => emp.id === Number(id));
};

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

// DELETE
const deleteEmployee = (id) {

    const index = employees.findIndex(emp => emp.id === Number(id));

    if (index === -1) {
        return null;
    }

    const deletedEmployee = employees.splice(index, 1)[0];

    return deletedEmployee;
}

module.exports = {
    getAllEmployees,
    addEmployee,
    getEmployeeById,
    updateEmployee,
    patchEmployee,
    deleteEmployee
};