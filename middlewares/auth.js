const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user");

exports.validateAccess = async (req, res, next) => {
	try {
		if (!req.headers.authorization) {
			return res.status(401).json({
				message: "Unauthorized to access this route. Provide access token",
				data: null
			});
		}

		const token = req.headers.authorization.split(" ")[1];
		if (!token) {
			return res.status(401).json({
				message: "Unauthorized to access this route. Provide access token",
				data: null
			});
		}
		const decoded = jwt.verify(token, process.env.SECRET_KEY);

		const foundUser = await User.find({ _id: decoded.id, email: decoded.email });
		if (!foundUser) {
			return res.status(404).json({
				message: "Unauthorized to access this route. Invalid token",
				data: null
			});
		}

		req.user = foundUser;
		next();
	} catch (error) {
		return res.status(500).json({
			message: error.message,
			data: null
		});
	}
};
