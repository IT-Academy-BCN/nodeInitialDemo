const 
mysql = require('mysql2'),
Sequelize = require('sequelize');

//const sequelize = require('./dbc');
const config = require('../config.json');

const { host, user, password, database } = config.database;
const sequelize = new Sequelize(database, user, password, { dialect: 'mysql' });

async function creadb(){
    
    const conexion = await mysql.createConnection({ host, user, password });
    conexion.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`, function(err, result) {
        if(err) throw err;
        sequelize.sync()
        .then(console.log('\n Bd sincronizada'))
        .catch(function(err){ console.log(err)})       
    })  
    conexion.end();          
}

creadb();

const Sequelize = require('sequelize');

const sequelize = require('../bd/creadb');

const Tarea = sequelize.define('Tarea', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        tarea: {
            type: Sequelize.STRING,
            //allowNull: false,
        }, 
        usuario: {
            type: Sequelize.STRING, 
            //allowNull: false
        }, 
        estado: Sequelize.STRING,  
        dataInici: Sequelize.DATE,   
        dataFinal: Sequelize.DATE  
    }, {
        timestamps: false,
      })


module.exports = Tarea;

module.exports = sequelize
