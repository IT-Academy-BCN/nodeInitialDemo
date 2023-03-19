const { Model, DataTypes } = require("sequelize");
const server = require('../../config/server')

class User extends Model {}

User.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
    }, {
    sequelize: server.database.getConnection(),
    modelName: 'User',
    freezeTableName: true,
});

(async () => {
    await User.sync();
})()

module.exports = User