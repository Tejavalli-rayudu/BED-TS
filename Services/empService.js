const employees = require("../emp");



// POST
const addEmployee = (employee) => {
    employees.push(employee);
    return employee;
};


module.exports = {
    addEmployee
};