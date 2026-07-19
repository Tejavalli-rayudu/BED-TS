const express = require("express");
const router = express.Router();

const studentController = require("../controllers/studentController");

// PUT Student
router.put("/:id", studentController.updateStudent);
//PATCH
router.patch("/:id", studentController.patchStudent);
