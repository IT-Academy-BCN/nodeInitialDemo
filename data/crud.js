const config = require('../config/config');

if(config.dialect === 'mongo'){
    module.exports = require('./mongoCRUD')
    }
    if(config.dialect === 'mysql'){
        module.exports = require('./mySQLCRUD')
   
    }