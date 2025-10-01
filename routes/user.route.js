const express = require('express');
const User = require("../models/user.model.js");


const router = express.Router();
const {register, login} = require('../controllers/auth.controller.js');

router.post("/user/register", register);
router.post("/user/login", login);

module.exports = router;


