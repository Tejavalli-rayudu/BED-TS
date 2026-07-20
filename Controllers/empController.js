const empService = require("../Services/empService");


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



module.exports = {

    updateEmployee,
    patchEmployee
};