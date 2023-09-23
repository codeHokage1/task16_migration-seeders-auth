const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        // mongoose.connection.on("connected", () => {
        //     console.log("Connected to DB!");
        // });
        // mongoose.connection.on("error", (error) => {
        //     console.log("Error connecting to DB: ", error);
        //     return error;
        // });
        console.log("Connected to DB!");
    } catch (error) {
        console.log("Error connecting DB: ", error);
    }
}

module.exports = connectDB;