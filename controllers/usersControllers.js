const User = require("../models/user.js");

exports.getAllUsers = async (req, res) => {
    const users = await User.findAll();
    res.json({
        message: "All users",
        data: users
    });
}