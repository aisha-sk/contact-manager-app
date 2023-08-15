const asyncHandler = require("express-async-handler");

// @desc register a user
// @route POST / api/users/register
// @access public
const registerUser = asyncHandler(async(req,res) => {
    const {username, email, password} = req.body
    res.json({message: "Register the user"})

    if (!username || !email || !password) {
        res.status(400)
        throw new error("All fields are mandatory")
    }

    const userAvailable = await User.findOne()
    if (userAvailable) {
        res.status(400)
        throw new Error("User has already been registered")
    }
    res.json()
})

const loginUser = asyncHandler(async(req,res) => {
    res.json({message: "Login user"})
})

// @access private
const currentUser = asyncHandler(async(req,res) => {
    res.json({message: "Current user information"})
})
module.exports = {registerUser, loginUser, currentUser}