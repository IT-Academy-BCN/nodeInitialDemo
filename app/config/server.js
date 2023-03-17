const config = require('./config')
const Mysql = require('./db/mysql')


let database;

switch (config.envs.db) {
    case 'mysql':
        const mysql = new Mysql(config)
        database = mysql.init()
        break;
    case 'mongodb':
        // TODO
        break;
    case 'jsondb':
        // TODO
        break;
    default:
        throw new Error('Databse needed')
}

mnodule.exports = {
    Database: database
}