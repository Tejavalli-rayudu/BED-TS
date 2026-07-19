const express = require("express");
const router = express.Router();

const studentController = require("../controllers/studentController");

// GET All Students
router.get("/", studentController.getAllStudents);

// GET Student By ID
router.get("/:id", studentController.getStudentById);

