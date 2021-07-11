module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        id: {
            type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true
        },
        name: {
            type: Sequelize.STRING, defaultValue: "Anònim", unique: true
        }
    });
    return User;
};
