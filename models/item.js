const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");

const { v4: uuidv4 } = require("uuid");

const Item = sequelize.define("Item", {
	_id: {
		type: DataTypes.UUID,
		primaryKey: true,
		defaultValue: uuidv4()
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false
	},
	description: {
		type: DataTypes.STRING,
		allowNull: false
	},
	price: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	discount: {
		type: DataTypes.INTEGER,
		defaultValue: 3
	},
	size: {
		type: DataTypes.ENUM,
		values: ["small", "medium", "large", "n/a"]
	},
	inStock: {
		type: DataTypes.BOOLEAN,
		defaultValue: true
	},
	category_id: {
		type: DataTypes.STRING,
		allowNull: false
	}
});

Item.sync({ alter: true })
	.then(() => {
		console.log("Items Table created and synced with model & database");
	})
	.catch((err) => {
		console.log(err);
	});

module.exports = Item;

// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Items extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Items.init({
//     name: DataTypes.STRING,
//     description: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Items',
//   });
//   return Items;
// };
