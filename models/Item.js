const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please enter item name"]
    },
    description:{
        type: String,
        required: [true, "Please enter item description"]
    },
    price:{
        type: Number,
        required: [true, "Please enter item price"]
    },
    size: {
        type: String,
        required: [true, "Please enter item size"],
        enum: ["small", "medium", "large", "n/a"]
    },
    discount: {
        type: Number,
        default: 3
    },
    categoryId: {
        type: mongoose.Schema.ObjectId,
        ref: "Category",
        required: [true, "Please enter category ID"]
    },
    inStock: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model("Item", itemSchema);