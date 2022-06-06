const config = require('../config/config');

if(config.dialect === 'mongo'){
    const {connectMongoDB} = require('./connectMongoDB');
    connectMongoDB()
    }
    if(config.dialect === 'mysql'){
    const {connectMySQL} = require('./connectMySQL')
    connectMySQL()
    }