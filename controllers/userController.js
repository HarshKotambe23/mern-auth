const User = require("../models/User")

const bcrypt = require("bcrypt")

exports.register = async (req, res) => {
    try {
        const { password } = req.body

        const hashPass = await bcrypt.hash(password, 10)
        const result = await User.create({
            ...req.body,
            password: hashPass
        })
        res.json({
            message: "User register success",
            result
        })
    } catch (error) {
        res.json({ message: "Somthing went wrong", error })
    }
}


exports.fetchUsers = async (req, res) => {
    try {
        const result = await User.find()
        res.json({
            message: "User fetch success",
            result
        })
    } catch (error) {
        res.json({ message: "Somthing went wrong", error })
    }
}










