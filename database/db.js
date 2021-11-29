const Sequelize = require('sequelize');

const userModel = require('../models/user')

const dbc = new Sequelize('','root', 'zky=w)/yh4wN', {
    host: 'localhost',
    dialect: 'mysql'
});

dbc.query("CREATE DATABASE IF NOT EXISTS xipxat;").then( () => {
    console.log(`✔️  Database successfully created!`);        
});

const db = new Sequelize('xipxat','root', 'zky=w)/yh4wN', {
    host: 'localhost',
    dialect: 'mysql',
});

const User = userModel(db, Sequelize);

db.sync( { force: false })
    .then( () => {
        console.log('✔️  users table synchronized!')

});

module.exports = User;