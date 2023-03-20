const env = require('./config')
const Mongo = require('./db/mongo');
const Mysql = require('./db/mysql')

//init db's
const mysqlInstance = new Mysql(env)
mysqlInstance.init()

const mongoInstance = new Mongo(env)
mongoInstance.init()

module.exports = {
    mysql: mysqlInstance,
    mongo: mongoInstance
}