const Item = require('../models/item');

exports.getAllItems = async (req, res) => {
    const allItems = await Item.findAll();
    res.json({
        message: "All items",
        data: allItems
    });
}