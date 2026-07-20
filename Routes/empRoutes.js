const express = require("express");
const router = express.Router();

const empController = require("../Controllers/empController");

router.delete("/:id", empController.deleteEmployee);

module.exports = router;