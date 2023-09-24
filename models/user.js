"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	User.init(
		{
			id: {
				type: DataTypes.UUID,
				primaryKey: true
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false
			},
			phoneNumber: {
				type: DataTypes.STRING,
				allowNull: false
			},
			gender: {
				type: DataTypes.ENUM,
				values: ["male", "female"]
			},
			isAdmin: {
				type: DataTypes.BOOLEAN
			},
			createdAt: {
				type: DataTypes.DATE,
				defaultValue: DataTypes.NOW
			}
		},
		{
			sequelize,
			modelName: "User",
			timestamps: true
		}
	);
	return User;
};