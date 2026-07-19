const empService = require("../Services/empService");

// GET ALL
const getAllEmployees = (req, res) => {
    res.status(200).json(empService.getAllEmployees());
};

// POST
const addEmployee = (req, res) => {
    const employee = empService.addEmployee(req.body);

    res.status(201).json({
        message: "Employee Added Successfully",
        data: employee
    });
};

// GET BY ID
const getEmployeeById = (req, res) => {
    const employee = empService.getEmployeeById(req.params.id);

    if (!employee) {
        return res.status(404).json({
            message: "Employee Not Found"
        });
    }

    res.status(200).json(employee);
};

// PUT
const updateEmployee = (req, res) => {
    const employee = empService.updateEmployee(req.params.id, req.body);

    if (!employee) {
        return res.status(404).json({
            message: "Employee Not Found"
        });
    }

    res.status(200).json({
        message: "Employee Updated Successfully",
        data: employee
    });
};

// PATCH
const patchEmployee = (req, res) => {
    const employee = empService.patchEmployee(req.params.id, req.body);

    if (!employee) {
        return res.status(404).json({
            message: "Employee Not Found"
        });
    }

    res.status(200).json({
        message: "Employee Patched Successfully",
        data: employee
    });
};

// DELETE
const deleteEmployee = (req, res) => {
    const employee = empService.deleteEmployee(req.params.id);

    if (!employee) {
        return res.status(404).json({
            message: "Employee Not Found"
        });
    }

    res.status(200).json({
        message: "Employee Deleted Successfully",
        data: employee
    });
};

module.exports = {
    getAllEmployees,
    addEmployee,
    getEmployeeById,
    updateEmployee,
    patchEmployee,
    deleteEmployee
};