const express = require("express");
const router = express.Router();

const empController = require("../Controllers/empController");

router.post("/", empController.addEmployee);


module.exports = router;