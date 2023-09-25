const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");

const { v4: uuidv4 } = require('uuid');

const Category = sequelize.define("Category", {
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
	active: {
		type: DataTypes.BOOLEAN,
		defaultValue: true
	}
});

Category.sync({ alter: true })
	.then(() => {
		console.log("Categories Table created and synced with model & database");
	})
	.catch((err) => {
		console.log(err.message);
	});

module.exports = Category;


// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Category extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Category.init({
//     name: DataTypes.STRING,
//     description: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Category',
//   });
//   return Category;
// };