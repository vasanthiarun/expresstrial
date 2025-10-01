const express = require('express');
const router = express.Router();
const  {
    adminBoard,
    allAccess,
    moderatorBoard,
    userBoard,
} = require ( "../controllers/test.controller.js"); //const is used in user.route.js this is newer method may require babel
//import { authJwt } from "../middlewares/index.js"
const jwt = require("jsonwebtoken");
const authJwt = require("../middlewares/authjwt.js")

router.post("/test/all", allAccess);
router.post("/test/user", [authJwt.verifyToken], userBoard);
router.post("/test/mod", [authJwt.verifyToken, authJwt.isModerator], moderatorBoard);
router.post("/test/admin", [authJwt.verifyToken, authJwt.isAdmin], adminBoard);

module.exports = router;


