const express = require("express");
const router = express.Router();

const empController = require("../Controllers/empController");

router.get("/", empController.getAllEmployees);
router.post("/", empController.addEmployee);
router.get("/:id", empController.getEmployeeById);
router.put("/:id", empController.updateEmployee);
router.patch("/:id", empController.patchEmployee);
router.delete("/:id", empController.deleteEmployee);

module.exports = router;