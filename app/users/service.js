const UserMysqlModel = require('./models/user.mysql.model')

class UserSerivice {

    async createMysql(user){
        const u = UserMysqlModel.build(user)
        await u.save()
        return u

    }

    async createMongo(user){
        // TO IMPLEMENT
    }
}

module.exports = UserSerivice