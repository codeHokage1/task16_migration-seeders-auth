const connectDB = require("./config/dbConfig");
const User = require("./models/User");
const brcypt = require("bcrypt");

connectDB()
	.then(async () => {
		await User.insertMany([
			{
				name: "farhan",
				email: "farhan@example.com",
				password: await brcypt.hash("123456", 10),
				phoneNumber: "9035444444",
				gender: "male",
                isAdmin: true
			}
		]);
		console.log("Added to DB successfully");
		process.exit(1);
	})
	.catch((err) => {
		console.log("Error seeding", err);
	});
