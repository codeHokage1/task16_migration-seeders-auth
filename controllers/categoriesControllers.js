const Category = require('../models/Categories');

exports.getAllCategories = async (req, res) => {
    const categories = await Category.find({});
    res.json({
        message: "All categories",
        data: categories
    });
}

// exports.createCategory = async (req, res) => {

// }