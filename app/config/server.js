const config = require('./config')
const Mysql = require('./db/mysql')



const databaseInstance = getDbInstance(config.envs.db)

async function getDbInstance(dbType){
    let database;
    switch (dbType) {
        case 'mysql':
            const mysql = new Mysql(config)
            database = await mysql.init()
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
    Database: databaseInstance
}