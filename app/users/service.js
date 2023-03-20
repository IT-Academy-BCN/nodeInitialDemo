const UserMysqlModel = require('./models/user.mysql.model')
const UserMongoModel = require('./models/user.mongo.model')

class UserSerivice {

    async createMysql(user){
        const u = UserMysqlModel.build(user)
        await u.save()
        return u

    }

    async createMongo(user){
        console.log('service ', user)
        //const u = new UserMongoModel(user)
        //u.save()
        //return u
        console.log(await UserMongoModel.find({}))

    }
}

module.exports = UserSerivice