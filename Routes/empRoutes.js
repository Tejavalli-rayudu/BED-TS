const express = require("express");
const router = express.Router();

const empController = require("../Controllers/empController");

router.put("/:id", empController.updateEmployee);
router.patch("/:id", empController.patchEmployee);

module.exports = router;