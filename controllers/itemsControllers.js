const Item = require("../models/Item");

exports.getAllItems = async (req, res) => {
	const items = await Item.find();

	res.json({
		message: "All items",
		data: items
	});
};

exports.createItem = async (req, res) => {
	const itemDetails = req.body;
	try {
		const newItem = await Item.create(itemDetails);
		return res.status(201).json({
			message: "Item created successfully",
			data: newItem
		});
	} catch (error) {
		return res.status(500).json({
			message: error.message,
			data: null
		});
	}
};

exports.updateItem = async (req, res) => {
	const itemId = req.params.id;
	const foundItem = await Item.findOne({_id: itemId});
	if (!foundItem) {
		return res.status(404).json({
			message: "Item not found",
			data: null
		});
	}

	const newDetails = req.body;
	try {
		const updatedUser = await Item.findByIdAndUpdate(foundItem._id, newDetails);
		return res.json({
			message: "Item updated successfully",
			data: updatedUser
		});
	} catch (error) {
		return res.status(500).json({
			message: error.message,
			data: null
		});
	}
};

exports.deleteItem = async (req, res) => {
	const itemId = req.params.id;
	const foundItem = await Item.findById(itemId);
	if (!foundItem) {
		return res.status(404).json({
			message: "Item not found",
			data: null
		});
	}

	try {
		const deletedUser = await Item.deleteOne({ _id: foundItem._id });
		return res.json({
			message: "Item deleted successfully",
			data: null
		});
	} catch (error) {
		return res.status(500).json({
			message: error.message,
			data: null
		});
	}
}
