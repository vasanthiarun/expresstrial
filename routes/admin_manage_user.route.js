const express = require('express');
const User = require("../models/user.model.js");
const jwt = require("jsonwebtoken");
const authJwt = require("../middlewares/authjwt.js")


const router = express.Router();
const {getUsers, getUser, createUser, updateUser, deleteUser} = require('../controllers/manage_user.controller.js');


router.get('/users', [authJwt.verifyToken, authJwt.isAdmin], getUsers);
router.get("/getUser/:id", [authJwt.verifyToken, authJwt.isAdmin], getUser);
router.post("/createUser", [authJwt.verifyToken, authJwt.isAdmin], createUser);
router.put("/updateUser/:id", [authJwt.verifyToken, authJwt.isAdmin], updateUser);
router.delete("/deleteUser/:id", [authJwt.verifyToken, authJwt.isAdmin], deleteUser);


module.exports = router;


