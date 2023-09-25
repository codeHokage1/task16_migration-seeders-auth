const User = require("../models/user.js");
const bcrypt = require("bcrypt");

exports.getAllUsers = async (req, res) => {
    const users = await User.findAll();
    res.json({
        message: "All users",
        data: users
    });
}

exports.createUser = async (req, res) => {
    const userDetails = req.body;
    userDetails.password = await bcrypt.hash(userDetails.password, 10);
    try {
        const newUser = await User.create(userDetails);
        res.status(201).json({
            message: "New user created",
            data: newUser
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null
        })
    }

}