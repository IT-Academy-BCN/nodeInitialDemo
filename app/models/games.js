export default (sequelize, type) => {

    return sequelize.define('game', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        playerId: {
            type: type.INTEGER,
            allowNull: false
        },
        dice1: {
            type: type.INTEGER,
            allowNull: false,
        },
        dice2: {
            type: type.INTEGER,
            allowNull: false,
        },
        won: {
            type: type.INTEGER,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: "Game"
    });

}