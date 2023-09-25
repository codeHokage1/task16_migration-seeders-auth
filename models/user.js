const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");

const { v4: uuidv4 } = require('uuid');

const User = sequelize.define("User", {
	_id: {
		type: DataTypes.UUID,
		primaryKey: true,
		defaultValue: uuidv4()
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false
	},
	phone_number: {
		type: DataTypes.STRING,
		allowNull: false
	},
	gender: {
		type: DataTypes.ENUM,
		values: ["male", "female"]
	},
	isAdmin: {
		type: DataTypes.BOOLEAN,
		defaultValue: false
	}
});

User.sync({ alter: true })
	.then(() => {
		console.log("Users Table created and synced with model & database");
	})
	.catch((err) => {
		console.log(err);
	});

module.exports = User;

// "use strict";
// const { Model } = require("sequelize");
// module.exports = (sequelize, DataTypes) => {
// 	class User extends Model {
// 		/**
// 		 * Helper method for defining associations.
// 		 * This method is not a part of Sequelize lifecycle.
// 		 * The `models/index` file will call this method automatically.
// 		 */
// 		static associate(models) {
// 			// define association here
// 		}
// 	}
// 	User.init(
// 		{
// 			id: {
// 				type: DataTypes.UUID,
// 				primaryKey: true
// 			},
// 			name: {
// 				type: DataTypes.STRING,
// 				allowNull: false
// 			},
// 			email: {
// 				type: DataTypes.STRING,
// 				allowNull: false
// 			},
// 			password: {
// 				type: DataTypes.STRING,
// 				allowNull: false
// 			},
// 			phoneNumber: {
// 				type: DataTypes.STRING,
// 				allowNull: false
// 			},
// 			gender: {
// 				type: DataTypes.ENUM,
// 				values: ["male", "female"]
// 			},
// 			isAdmin: {
// 				type: DataTypes.BOOLEAN
// 			},
// 			createdAt: {
// 				type: DataTypes.DATE,
// 				defaultValue: DataTypes.NOW
// 			}
// 		},
// 		{
// 			sequelize,
// 			modelName: "User",
// 			timestamps: true
// 		}
// 	);
// 	return User;
// };
