const asyncHandler = require("express-async-handler");

// @desc register a user
// @route POST / api/users/register
// @access public
const registerUser = asyncHandler(async(req,res) => {
    res.json({message: "Register the user"})
})

const loginUser = asyncHandler(async(req,res) => {
    res.json({message: "Login user"})
})

// @access private
const currentUser = asyncHandler(async(req,res) => {
    res.json({message: "Current user information"})
})
module.exports = {registerUser, loginUser, currentUser}