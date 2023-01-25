require('dotenv').config('../.env')
const {Sequelize} = require('sequelize');
const mysql = require('mysql2');

// Open the connection to MySQL server
// change password to sql computer password
const connection = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD
});

// Run create database statement
connection.query(
      `CREATE DATABASE IF NOT EXISTS ` + process.env.DATABASE_NAME,
      function (err, results) {
        console.log(results);
        console.log(err);
      }
    );
  
// change second root to sql computer password
const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;