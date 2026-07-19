const express = require("express");
const router = express.Router();

const studentController = require("../controllers/studentController");

// POST Student
router.post("/", studentController.addStudent);

