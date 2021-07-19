const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../database/db");
const Game = sequelize.define(
	"Game",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
		},
		
		dice1: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		dice2: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		won: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	},
	{
		sequelize,
		modelName: "game",
	}
);

module.exports = Game;
