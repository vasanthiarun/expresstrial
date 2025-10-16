const User = require("../models/user.model");
const config = require("../config/auth.config.js");
//import jwt from "jsonwebtoken"; //this didn't work, need to change 
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
	console.log('Received form data:'+req.body);
	const {display_name, roll_no, email, password} = req.body;
	//todo add validation to check if all fields are present

	//check if email already exists 
	let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

	//todo hash password and store
	 user = new User({
	    display_name,
            email,
            password,
	    roll_no,
	    user_access: 'member', //member, moderator, admin 
	    status: 'active' //to-activate, active, disabled
        });
        await user.save();
        res.status(200).json({ message: 'User registered successfully' });
	
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const login = async (req, res) => {
  try {
	console.log('Received form data:'+req.body);
	const {email, password} = req.body;
	//todo add validation to check if all fields are present

	let user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
     // todo bcrypt compare
   const passwordIsValid = (password === user.password)
       if (!passwordIsValid) {
           return res.status(401).json({
	           accessToken: null,
                message: "Invalid Password!",
        });
   }
	  // Generate JWT
    const token = jwt.sign({ id: user.id }, config.secret, {
            algorithm: "HS256",
            expiresIn: 86400, // 24 hours
    });
	res.cookie('accessToken', token, {
				    httpOnly: true,
		 		   secure: false,          // set to true if using HTTPS
				   sameSite: 'lax',        // or 'none' if cross-origin with secure
				   maxAge: 24 * 60 * 60 * 1000 // 1 day
				 }
			);
    console.log(user.user_access); 
	res.status(200).json({
            id: user._id,
            username: user.display_name,
            email: user.email,
            roles: user.user_access,
          //  accessToken: token,
        });
	
  }
  catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getLoggedUser = async(req, res) =>
{	
	res.status(200).json({
            id: req.user._id,
            username: req.user.display_name,
            email: req.user.email,
            roles: req.user.user_access,

        });
};

const logout = async(req, res) =>
{	
	 res.clearCookie("accessToken");
	 res.json({ message: 'loggedout' });
	 
};


module.exports = {
  register, login, getLoggedUser, logout
};