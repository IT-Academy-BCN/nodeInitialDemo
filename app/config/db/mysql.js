const Sequelize = require("sequelize")
const Database = require('./database')

class Mysql extends Database{
    constructor(envs){
        if(!Mysql._instance){
            super('mysql')
            this.connection = null
            this.envs = envs
        }
        return Mysql._instance
    }

    /**
     * 
     * @returns returns singleton instance
     */
    static getInstance(){
        return this._instance
    }


    /**
     * Inits connection with database
     * @returns sequelize connection
     */
    async init() {
        console.log(this.envs)
        this.connection = new Sequelize(
        this.envs.dbName,
        this.envs.dbUser,
        this.envs.dbPass,
            {
            port: this.envs.dbPort, 
            host: this.envs.dbHost,
            dialect: 'mysql'
            }
        )
        return await this.connection.authenticate()
    }

}

module.exports = Mysql