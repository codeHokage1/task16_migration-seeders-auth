const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Please enter your name"]
	},
	email: {
		type: String,
		required: [true, "Please enter your email"],
		unique: true
	},
	password: {
		type: String,
		required: [true, "Please enter your password"]
	},
	isAdmin: {
		type: Boolean,
		default: false
	},
	phoneNumber: {
		type: String,
		required: [true, "Please enter your phone number"]
	},
	gender: {
		type: String,
		enum: ["male", "female"],
        required: [true, "Include your gender(male/female)"]
	},
    createdAt:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("User", userSchema);
