const Item = require("../models/item");

exports.getAllItems = async (req, res) => {
	try {
		const allItems = await Item.findAll();
		res.json({
			message: "All items",
			data: allItems
		});
	} catch (error) {
		res.status(500).json({
			message: error,
			data: null
		});
	}
};

exports.createItem = async (req, res) => {
	const itemDetails = req.body;
	try {
		const newItem = await Item.create(itemDetails);
		res.status(201).json({
			message: "New item created",
			data: newItem
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
			data: null
		});
	}
};

exports.updateItem = async (req, res) => {
    const { id } = req.params;
    const updatedDetails = req.body;
    try {
        const foundItem = await Item.findAll({ where: { _id: id } });
        if (!foundItem.length) {
            return res.status(404).json({
                message: "Item not found",
                data: null
            });
        }
        const updatedItem = await Item.update(updatedDetails, { where: { _id: id } });
        res.status(201).json({
            message: "Item updated",
            data: updatedItem
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null
        });
    }
};

exports.deleteItem = async (req, res) => {
    const { id } = req.params;
    const updatedDetails = req.body;
    try {
        const foundItem = await Item.findAll({ where: { _id: id } });
        if (!foundItem.length) {
            return res.status(404).json({
                message: "Item not found",
                data: null
            });
        }
        const updatedItem = await Item.destroy({ where: { _id: id } });
        res.status(201).json({
            message: "Item deleted",
            data: null
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null
        });
    }
}