const empService = require("../Services/empService");

// GET ALL
const getAllEmployees = (req, res) => {
    res.status(200).json(empService.getAllEmployees());
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

