const jwt = require("jsonwebtoken");
//import config from "../config/auth.config.js";
const authjwt = require("../middlewares/authjwt.js")
const config = require("../config/auth.config.js");

const User = require("../models/user.model.js");
 
 
const verifyToken = async (req, res, next) => {
    let token = req.headers["x-access-token"] || req.headers["authorization"];
 
    if (!token) {
        return res.status(403).json({ message: "No token provided!" });
    }
 
    // Remove 'Bearer ' prefix if present
    if (token.startsWith("Bearer ")) {
        token = token.slice(7, token.length);
    }
 
    try {
        const decoded = jwt.verify(token, config.secret);
        req.userId = decoded.id;
 
        // Fetch user details
        const user = await User.findById(req.userId);
        if (!user) {
            return res.status(404).json({ message: "User not found!" });
        }
 
        req.user = user;
        next();
    } catch (err) {
        return res.status(401).json({ message: "Unauthorized!" });
    }
};
 
const isAdmin = async (req, res, next) => {
    try {
        const user = req.user;
        const role = user.user_access
 
        const hasAdminAccess = (role === "admin");
 
        if (!hasAdminAccess) {
            return res.status(403).json({ message: "Require Admin Access!" });
        }
 
        next();
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
 
const isModerator = async (req, res, next) => {
    try {
       const user = req.user;
        const role = user.user_access
 
        const hasModeratorAccess = (role === "moderator"); // admin has all aceess
 
        if (!hasModeratorAccess) {
            return res.status(403).json({ message: "Require Moderator Access!" });
        }
        next();
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
 
const authJwt = {
    verifyToken,
    isAdmin,
    isModerator
};
 
module.exports = authJwt;