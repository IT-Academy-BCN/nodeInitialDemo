module.exports = (sequelize, Sequelize) => {
    const Game = sequelize.define("game", {
        id: {
            type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true
        },
        userId: {
            type: Sequelize.INTEGER, allowNull: false
        },
        dice1: {
            type: Sequelize.INTEGER, allowNull: false
        },
        dice2: {
            type: Sequelize.INTEGER, allowNull: false
        },
        success: {
            type: Sequelize.INTEGER, allowNull: false
        }
    });
    return Game;
}