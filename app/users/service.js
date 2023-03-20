const UserMysqlModel = require('./models/user.mysql.model')
const UserMongoModel = require('./models/user.mongo.model')

class UserSerivice {

    async createMysql(user){
        const u = UserMysqlModel.build(user)
        await u.save()
        return u
    }

    async createMongo(user){
        const u = new UserMongoModel(user)
        await u.save()
        return u
    }

    async createJson(Task){
        //TODO
    }
}

module.exports = UserSerivice