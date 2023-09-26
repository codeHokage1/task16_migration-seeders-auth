const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.getAllUsers = async (req, res) => {
	const users = await User.find();
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
		const token = jwt.sign({ id: newUser._id, email: newUser.email }, process.env.SECRET_KEY, {
			expiresIn: "1h"
		});

		return res.status(201).json({
			message: "User created successfully",
			data: newUser,
			token
		});
	} catch (error) {
		return res.status(500).json({
			message: "Error creating user",
			error: error.message
		});
	}
};

exports.loginUser = async (req, res) => {
	const foundUser = await User.findOne({ email: req.body.email });
	if (!foundUser) {
		return res.status(404).json({
			message: "User not found",
			data: null
		});
	}
	const isMatch = await bcrypt.compare(req.body.password, foundUser.password);
	if (!isMatch) {
		return res.status(401).json({
			message: `Invalid Password for ${foundUser.email}`,
			data: null
		});
	}

	const token = jwt.sign({ id: foundUser._id, email: foundUser.email }, process.env.SECRET_KEY, {
		expiresIn: "1h"
	});
	return res.json({
		message: "Login Successful!",
		data: foundUser,
		token
	});
};
