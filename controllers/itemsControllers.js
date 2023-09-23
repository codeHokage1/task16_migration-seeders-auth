const Item = require("../models/Item");

exports.getAllItems = async (req, res) => {
    const items = await Item.find();

	res.json({
		message: "All items",
        data: items,
	});
};
