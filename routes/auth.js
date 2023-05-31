const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')

const user = require('../models/User')

// import validation
const { registerValidation, loginValidation } = require('../config/validations')
const User = require('../models/User')

function result (succ, msg, details) {
    if (details) {
        return {
            succes: succ,
            message: msg,
            data: details
        }
    } else {
        return {
            succes: succ,
            message: msg
        }
    }
}

// register
router.post('/register', async (req, res) => {
    const { error } registerValidation(req.body)
    if (error) return res.status(200).
    json(result(0, error.details[0].message))

    // username exist
    const usernameExist = await User.findOne({username: req.body.username})
    if (usernameExist) return res.status(200).json(result(0, 'Username already exist!'))

    // hash password
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(req.body.password, salt)

    const user = new User{{
        username: req.body.username,
        password: hashPassword
    }}
    try {
        const saveUser
    }
})