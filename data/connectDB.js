const config = require('../config/config');

if(config.dialect === 'mysql'){
    const {connectMySQL} = require('./connectMySQL')
    connectMySQL()
    }