const Sequelize = require('sequelize');
const sequelize = require('../database');

const Throws = sequelize.define('player', {
    first_dice: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    second_dice: {
        type: Sequelize.INTEGER,
        allowNull: false
    }, 
    total: {
        type: Sequelize.INTEGER,
        allowNull: false
    }}, {
        timestamps: false
});

module.exports = Throws;
