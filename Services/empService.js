const employees = require("../emp");

// GET ALL
const getAllEmployees = () => {
    return employees;
};


// GET BY ID
const getEmployeeById = (id) => {
    return employees.find(emp => emp.id === Number(id));
};

module.exports = {
    getAllEmployees,
    getEmployeeById
}
