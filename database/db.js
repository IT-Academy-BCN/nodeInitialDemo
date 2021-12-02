const Sequelize = require('sequelize');

const userModel = require('../models/user')

const dbc = new Sequelize('','root', 'zky=w)/yh4wN', {
    host: 'localhost',
    dialect: 'mysql',
    operartorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});

dbc.query("CREATE DATABASE IF NOT EXISTS xipxat;").then( ()=> {
    console.log(`✔️  Database successfully created!`);        
});

const db = new Sequelize('xipxat','root', 'zky=w)/yh4wN', {
    host: 'localhost',
    dialect: 'mysql',
    operartorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});

const user = userModel(db, Sequelize);

db.sync( { force: false })
    .then( () => {
        console.log('✔️  users synchronized!')

});

module.exports = user;