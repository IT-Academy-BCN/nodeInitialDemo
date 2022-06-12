const config = require('../config/config');

if(config.dialect === 'mongodb'){
    const {connectMongoDB} = require('./connectmongodb');
    //FconnectMongoDB()
}
    if(config.dialect === 'mysql'){
    const {connectMySQL} = require('./connectMySQL')
    connectMySQL()
}