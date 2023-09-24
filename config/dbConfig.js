const { Sequelize } = require("sequelize");
require("dotenv").config();

const config = require("./config");

const sequelizeDB = new Sequelize(config.development);

module.exports = sequelizeDB;