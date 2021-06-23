export default (sequelize, type) => {

    return sequelize.define('player', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: type.STRING,
            allowNull: false,
            defaultValue: "Anònim"
        }
    }, {
        sequelize,
        modelName: "Player"
    });

}
  