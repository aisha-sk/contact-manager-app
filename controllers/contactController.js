//@desc Get all contacts
//@route GET /api/contacts
//@access public 

const asyncHandler = require("express-async-handler")

const getAllContacts = asyncHandler(async (req,res) => {
    res.status(200).json({message: 'get all contacts'})
})

const getContact = asyncHandler(async (req,res) => {
    res.status(200).json({message: `get contact for ${req.params.id}`})
})

const createContact = asyncHandler(async (req,res) => {
    console.log(' req body is:', req.body)
    const {name, email, phone } = req.body
    if (!name || !email || !phone) {
        res.status(400)
        throw new Error('all fields are mandatory')
    }
    res.status(201).json({message: 'create(post) contacts'})
})

const updateContact = asyncHandler(async (req,res) => {
    res.status(200).json({message: `update(put) contact for ${req.params.id}`})
})

const deleteContact = asyncHandler(async (req,res) => {
    res.status(200).json({message: `delete contact for ${req.params.id}`})
})

module.exports = {getContact, getAllContacts, createContact, updateContact, deleteContact}