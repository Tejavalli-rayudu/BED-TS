const express = require("express");
const router = express.Router();

const studentController = require("../Controllers/studentController");

router.get("/", studentController.getAllStudents);
router.post("/", studentController.addStudent);
router.get("/:id", studentController.getStudentById);
router.put("/:id", studentController.updateStudent);
router.patch("/:id", studentController.patchStudent);
router.delete("/:id", studentController.deleteStudent);

module.exports = router;