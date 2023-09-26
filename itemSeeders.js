const connectDB = require("./config/dbConfig");
const brcypt = require("bcrypt");
const Item = require("./models/Item");

connectDB()
	.then(async () => {
		await Item.insertMany([
			{
				name: "Lebron XX",
				description: "Latest Lebron James shoe",
				price: 200,
				size: "medium",
				categoryId: "650ebe44ea700cfaa907ed06",
			},
            {
				name: "Jordan 4s",
				description: "Class. Style. Comfort.",
				price: 370,
				size: "medium",
				categoryId: "650ebe44ea700cfaa907ed06",
			},
            {
				name: "Curry 8",
				description: "Latest Stephen Curry shoe",
				price: 300,
				size: "medium",
				categoryId: "650ebe44ea700cfaa907ed06",
			},
            {
				name: "Devin Booker GTCut",
				description: "Move like Devin Booker",
				price: 250,
				size: "large",
				categoryId: "650ebe44ea700cfaa907ed06",
			},
            {
				name: "Jordan Why Not 3.0",
				description: "The best shoe to dunk the ball",
				price: 400,
				size: "small",
				categoryId: "650ebe44ea700cfaa907ed06",
			},
            {
				name: "Samsumg Galaxy S21 Ultra",
				description: "Too sleek to be true",
				price: 700,
				size: "n/a",
				categoryId: "650ebe44ea700cfaa907ed07",
			},
            {
				name: "Redmi Note 10 Pro",
				description: "Not sure there's anyone betetr",
				price: 230,
				size: "n/a",
				categoryId: "650ebe44ea700cfaa907ed07",
			},
            {
				name: "Google Pixel 7",
				description: "Function. Speed. Style.",
				price: 780,
				size: "n/a",
				categoryId: "650ebe44ea700cfaa907ed07",
			},
            {
				name: "Samsumg Galaxy S21 Ultra",
				description: "Too sleek to be true",
				price: 700,
				size: "n/a",
				categoryId: "650ebe44ea700cfaa907ed07",
			},
            {
				name: "Samsumg Galaxy S21 Ultra",
				description: "Too sleek to be true",
				price: 700,
				size: "n/a",
				categoryId: "650ebe44ea700cfaa907ed07",
			}
		]);
		console.log("Added to DB successfully");
		process.exit(1);
	})
	.catch((err) => {
		console.log("Error seeding", err);
	});
