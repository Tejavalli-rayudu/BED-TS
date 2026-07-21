const express = require("express");
const router = express.Router();
const login =require("../Controllers/authContoller")

router.post('/login',login)

module exports =router;