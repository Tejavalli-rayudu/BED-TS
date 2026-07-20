const empService = require("../Services/empService");

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

    deleteEmployee
};