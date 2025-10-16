const express = require('express');
const User = require("../models/user.model.js");


const router = express.Router();
const {register, login, getLoggedUser, logout} = require('../controllers/auth.controller.js');
const jwt = require("jsonwebtoken");
const authJwt = require("../middlewares/authjwt.js")


router.post("/user/register", register);
router.post("/user/login", login);
router.post("/user/logout", logout);

router.get("/auth/getLoggedUser", [authJwt.verifyToken], getLoggedUser);

module.exports = router;


