const joi = require("joi");

exports.checkNewUser = async (req, res, next) => {
	const schema = joi.object({
		name: joi.string().required(),
		email: joi.string().email().required(),
		password: joi.string().required(),
		isAdmin: joi.boolean(),
		phone_number: joi.string().required(),
		gender: joi.string().valid("male", "female").required()
	});

	try {
		const value = await schema.validateAsync(req.body);
	} catch (error) {
		return res.status(422).json({ message: error.details[0].message, data: null });
	}
	next();
};

exports.checkNewCategory = async (req, res, next) => {
	const schema = joi.object({
		name: joi.string().required(),
		description: joi.string().required()
	});

	try {
		const value = await schema.validateAsync(req.body);
	} catch (error) {
		return res.status(422).json({
			message: error.details[0].message,
			data: null
		});
	}
	next();
};

exports.checkLogin = async (req, res, next) => {
	const schema = joi.object({
		email: joi.string().email().required(),
		password: joi.string().required()
	});

	try {
		const value = await schema.validateAsync(req.body);
	} catch (error) {
		return res.status(422).json({ message: error.details[0].message, data: null });
	}
	next();
};
