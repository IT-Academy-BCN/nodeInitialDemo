const config = require('./config')
const Mysql = require('./db/mysql')


//init db
let databaseInstance = getDbInstance(config.envs.dbType)

function getDbInstance(dbType){
    let database;
    switch (dbType) {
        case 'mysql':
            const mysql = new Mysql(config.envs)
            mysql.init()
            database = mysql
            break;
        case 'mongo':
            // TODO
            break;
        case 'json':
            // TODO
            break;
        default:
            throw new Error('Databse needed')
    }
    return database;
}


module.exports = {
    database: databaseInstance
}