const { Model, DataTypes } = require("sequelize");
const { mysql } = require('../../config/config')

class User extends Model {}

User.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
    }, {
    sequelize: mysql.getConnection(),
    modelName: 'User',
    freezeTableName: true,
});

(async () => {
    await User.sync();
})()

module.exports = User