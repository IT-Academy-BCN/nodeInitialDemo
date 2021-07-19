const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../database/db");
const Player = sequelize.define(
	"Player",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
		},
		username: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false,
			defaultValue: "ANONYMOUS",
		},
	},
	{
		sequelize,
		modelName: "player",
	}
);

module.exports = Player;
