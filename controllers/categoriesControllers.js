const Category = require('../models/category');

exports.getAllCategories = async (req, res) => {
    const allCategories = await Category.findAll();

    res.json({
        message: "All categories",
        data: allCategories
    });
}

exports.createCategory = async (req, res) => {
    const catDetails = req.body;

    try {
        const newCategory = await Category.create(catDetails);
        res.status(201).json({
            message: "New category created",
            data: newCategory
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null
        });
    }
}