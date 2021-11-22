const 
mysql = require('mysql2'),
Sequelize = require('sequelize'),
configDB = require('../config'),
sequelize = new Sequelize(configDB.database, configDB.user, configDB.password, { dialect: 'mysql' });

async function connectMySQLDB(){
    
    const connection = mysql.createConnection({ host:configDB.host, user:configDB.user, password:configDB.password });
    connection.query(`CREATE DATABASE IF NOT EXISTS \`${configDB.database}\`;`, (err, result) =>{
        if(err) throw err
        sequelize.sync()
        .then(()=>console.log('MySQLDB connected'))
        .catch(err=>console.log(err))
    })
    connection.end();
}

const Roll = sequelize.define('Roll',{
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
    rollScore:{
        type: Sequelize.INTEGER,
    },
    veredict:{
        type: Sequelize.STRING,
    },
},
    {
        timestamps:false
    }
)

const Player = sequelize.define('Player', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }, 
    totalGames:{
        type: Sequelize.INTEGER,
        defaultValue:0
    },
    totalWins:{
        type: Sequelize.INTEGER,
        defaultValue:0
    }, 
    winRate:{
        type: Sequelize.DECIMAL(10,2),
        defaultValue:0
    }, 
}, {
    timestamps: true,
    updatedAt: false,
    createdAt: 'data'
    }
)

Player.hasMany(Roll,{onDelete:'cascade'})
Roll.belongsTo(Player)

module.exports = {
    Player,
    Roll,
    sequelize,
    connectMySQLDB
}


