const mongoose = require("mongoose");

// Schema definition
const UserSchema = new mongoose.Schema(
  {
    roll_no: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    display_name: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,      
    },
    user_access: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // adds createdAt, updatedAt
  }
);

// Model
const User = mongoose.model("User", UserSchema);

module.exports = User;
