require('dotenv').config()

const Mongo = require('./db/mongo');
const Mysql = require('./db/mysql')


const env = {
    mysqlDbHost: process.env.MYSQL_DATABASE_HOST,
    mysqlDbPort: process.env.MYSQL_DATABASE_PORT,
    mongoDbHost: process.env.MONGO_DATABASE_HOST,
    mongoDbPort: process.env.MONGO_DATABASE_PORT,	
    dbUser: process.env.DATABASE_USER,
    dbPass: process.env.DATABASE_PASSWORD,
    dbName: process.env.DATABASE_NAME,
    dbType: process.env.DATABASE
}


const mysqlInstance = new Mysql(env)
mysqlInstance.init()

const mongoInstance = new Mongo(env)
mongoInstance.init()


module.exports = {
    envs: env,
    mysql: mysqlInstance,
    mongo: mongoInstance
}