
const configSQL = require('../config'),
Sequelize = require('sequelize');
const sequelize = new Sequelize(configSQL.database, configSQL.user, configSQL.password, { dialect: 'mysql' });

const Throws = sequelize.define('Throws',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    diceA:{
        type: Sequelize.INTEGER,
    },
    diceB:{
        type: Sequelize.INTEGER,
    },
    total:{
        type: Sequelize.INTEGER,
    },
    win:{
        type: Sequelize.BOOLEAN,
    },
},
    {
        timestamps:false
    }
)

const Player = sequelize.define('Player', {
    userID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }, 
    totalThrows:{
        type: Sequelize.INTEGER,
        defaultValue:0
    },
    winThrows:{
        type: Sequelize.INTEGER,
        defaultValue:0
    }, 
    percentage:{
        type: Sequelize.DECIMAL(10,2),
        defaultValue:0
    }, 
}, 
    {
    timestamps: true,
    }
)

Player.hasMany(Throws,{onDelete:'cascade'})
Throws.belongsTo(Player)

module.exports = {
    Player,
    Throws,
}
