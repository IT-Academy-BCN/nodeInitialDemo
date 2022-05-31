const config = require('../config/config');


if(config.dialect === 'mysql'){
        module.exports = require('./mySQLCRUD')
   
    }