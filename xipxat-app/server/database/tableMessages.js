const messageModel = require('../models/message');   
const Sequelize = require('sequelize');
const db = require('./db');

const Message = messageModel(db, Sequelize);

module.exports = Message;