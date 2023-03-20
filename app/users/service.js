const UserMysqlModel = require('./models/user.mysql.model')
const UserMongoModel = require('./models/user.mongo.model')

class UserSerivice {

    /**
     * Save user in mysql db
     * @param {Object} user 
     * @returns user created from db
     */
    async createMysql(user){
        const u = UserMysqlModel.build(user)
        await u.save()
        return u
    }
    /**
     * Save user in mongo db
     * @param {Object} user 
     * @returns user created from db
     */
    async createMongo(user){
        const u = new UserMongoModel(user)
        await u.save()
        return u
    }
    /**
     * Save user in json
     * @param {Object} user 
     */
    async createJson(user){
        //TODO
    }
}

module.exports = UserSerivice