const User = require("../models/user.model");



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



module.exports = {
  register,
};