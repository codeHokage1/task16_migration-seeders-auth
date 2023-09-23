const connectDB = require("./config/dbConfig");
const Category = require("./models/Categories")

connectDB()
	.then(async () => {
		await Category.insertMany([
			{
				name: "shoes",
				description: "affordable and latest shoes",
			},
            {
				name: "mobile phones",
				description: "quality and affordable mobile phones"
			}
		]);
		console.log("Added to DB successfully");
		process.exit(1);
	})
	.catch((err) => {
		console.log("Error seeding", err);
	});
