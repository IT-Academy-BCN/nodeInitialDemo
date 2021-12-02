const Sequelize = require('sequelize');
const mysql = require('mysql2/promise');

mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "zky=w)/yh4wN"
}).then(connection => {
    connection.query("CREATE DATABASE IF NOT EXISTS XIPXAT;").then((res) => {
        console.log("✔️  Database created or successfully checked")
    }). catch (err => {
        console.log("Database create fail!" + err)
    })
}).catch (err => {
        console.log("Connection fail" + err)
});

const db = new Sequelize('xipxat','root', 'zky=w)/yh4wN', {
    host: 'localhost',
    dialect: 'mysql'
});

db.sync( { force: false })
    .then( () => {
        console.log('✔️  All models synchronized!');
    });

module.exports = db;