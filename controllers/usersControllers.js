const User = require("../models/user.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.getAllUsers = async (req, res) => {
	const users = await User.findAll();
	res.json({
		message: "All users",
		data: users
	});
};

exports.createUser = async (req, res) => {
	const userDetails = req.body;
	userDetails.password = await bcrypt.hash(userDetails.password, 10);
	try {
		const newUser = await User.create(userDetails);

        const token = jwt.sign(
			{
				_id: newUser._id,
				email: newUser.email
			},
			process.env.SECRET_KEY,
			{
				expiresIn: "1h"
			}
		);
		
		res.status(201).json({
			message: "New user created",
			data: newUser,
            token
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			data: null
		});
	}
};

exports.loginUser = async (req, res) => {
	const { email, password } = req.body;
	try {
		const foundUser = await User.findOne({ where: { email } });
		if (!foundUser) {
			return res.status(404).json({
				message: "User not found. Invalid credentials",
				data: null
			});
		}
		const isPasswordValid = await bcrypt.compare(password, foundUser.password);
		if (!isPasswordValid) {
			return res.status(404).json({
				message: "Password incorrect.",
				data: null
			});
		}

		const token = jwt.sign(
			{
				_id: foundUser._id,
				email: foundUser.email
			},
			process.env.SECRET_KEY,
			{
				expiresIn: "1h"
			}
		);
		res.json({
			message: "User logged in",
			data: foundUser,
            token
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			data: null
		});
	}
};
