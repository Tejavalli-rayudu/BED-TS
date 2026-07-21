const express = require("express");
const router = express.Router();

const studentController = require("../Controllers/studentController");
const authMiddleware = require("../middleware/authMiddleware");

// Protect all routes below
router.use(authMiddleware);

router.get("/", studentController.getAllStudents);
router.post("/", studentController.addStudent);
router.get("/:id", studentController.getStudentById);
router.get("/query", studentController.getStudentsByQuery);
router.put("/:id", studentController.updateStudent);
router.patch("/:id", studentController.patchStudent);
router.delete("/:id", studentController.deleteStudent);

module.exports = router;