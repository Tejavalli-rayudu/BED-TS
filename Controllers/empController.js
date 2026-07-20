const empService = require("../Services/empService");

// POST
const addEmployee = (req, res) => {
    const employee = empService.addEmployee(req.body);

    res.status(201).json({
        message: "Employee Added Successfully",
        data: employee
    });
};

module.exports = {
    addEmployee
};