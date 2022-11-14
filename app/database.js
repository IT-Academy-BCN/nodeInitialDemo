const Sequelize = require('sequelize');
const mysql = require("mysql2");

// Open the connection to MySQL server
// change password to sql computer password
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
});

// Run create database statement
connection.query(
      `CREATE DATABASE sprint4_2`,
      function (err, results) {
        console.log(results);
        console.log(err);
      }
    );
  
// change second root to sql computer password
const sequelize = new Sequelize('sprint4_2', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;