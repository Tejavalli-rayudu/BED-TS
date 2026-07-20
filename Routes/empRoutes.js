const express = require("express");
const router = express.Router();

const empController = require("../Controllers/empController");

router.get("/", empController.getAllEmployees);
router.get("/:id", empController.getEmployeeById);

module.exports = router;