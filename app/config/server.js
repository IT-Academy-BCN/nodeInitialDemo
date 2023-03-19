const config = require('./config')
const Mysql = require('./db/mysql')



let databaseInstance = getDbInstance(config.envs.db)

function getDbInstance(dbType){
    let database;
    switch (dbType) {
        case 'mysql':
            const mysql = new Mysql(config.envs)
            mysql.init()
            database = mysql
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
    return database;
}


module.exports = {
    database: databaseInstance
}