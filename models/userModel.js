const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please enter your username"],
    },
    email: {
      type: String,
      required: [true, "Please enter your email address"],
      unique: [true, "Email address already in use"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema)