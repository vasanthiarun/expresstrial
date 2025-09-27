const express = require('express');
const User = require("../models/user.model.js");


const router = express.Router();
const {register} = require('../controllers/auth.controller.js');

router.post("/user/register", register);


module.exports = router;


