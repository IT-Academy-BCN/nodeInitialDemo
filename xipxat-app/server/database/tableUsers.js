const userModel = require('../models/user')
const Sequelize = require('sequelize');
const db = require('./db');

const User = userModel(db, Sequelize);

module.exports = User;