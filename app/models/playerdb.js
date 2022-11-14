const Sequelize = require('sequelize');
const sequelize = require('../database');

const Player = sequelize.define('player', {
    username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    register_date: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    won_games: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    losed_games: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    victory_percentage: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false
    }}, {
        timestamps: false
});

module.exports = Player;
