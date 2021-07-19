const { Sequelize } = require("sequelize");
const { database } = require("../config/config");
const sequelize = new Sequelize(
	database.database,
	database.username,
	database.password,
	{
		host: database.host,
		dialect: "mysql",
	},
	{
		pool: {
			max: 5,
			min: 0,
			acquire: 30000,
			idle: 10000,
		},
	}
);

module.exports = sequelize;
