const express = require("express");
const categoriesRoutes = require("./routes/categoriesRoutes");
const itemsRoutes = require("./routes/itemsRoutes");
const ordersRoutes = require("./routes/ordersRoutes");
const userRoutes = require("./routes/userRoutes");

const connectDB = require("./config/dbConfig");

require("dotenv").config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
	res.send("Welcome to my API!");
});

app.use("/users", userRoutes);
app.use("/categories", categoriesRoutes);
app.use("/items", itemsRoutes);
app.use("/orders", ordersRoutes);

app.get("*", (req, res) => {
	res.status(404).json({
		message: "Route not found",
		data: null
	});
});

const PORT = process.env.PORT || 3000; 

connectDB();
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});