const UserSerivice = require('./service')

class UserController {
    constructor(dbType){
        this.service = new UserSerivice()
        this.type = dbType
    }

    async create(user){
        let u;
        switch (this.type){
            case 'mysql':
                u = await this.service.createMysql(user)
                break;
            case 'mongo':
                u = await this.service.createMongo(user)
                break;
            case 'json':
                break;
            default:
                throw new Error('no database')
        }

        return u;

    }
}

module.exports = UserController