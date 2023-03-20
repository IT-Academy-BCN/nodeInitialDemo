const mongoose = require('mongoose')
const Database = require("./base")


class Mongo extends Database{
    constructor(envs){
        if(!Mongo._instance){
            super('mongo')
            this.connection = null
            this.envs = envs
            this.url =  `mongodb://${this.envs.dbUser}:${this.envs.dbPass}@${this.envs.mongoDbHost}:${this.envs.mongoDbPort}/${this.envs.dbName}?authSource=admin`
        }
        return Mongo._instance
    }

    /**
     * 
     * @returns returns singleton instance
     */
    static getInstance(){
        return this._instance
    }

    /**
     * 
     * @returns return db connection
     */
    getConnection() {
        return this.connection
    }

    /**
     * Inits connection with database
     * @see https://mongoosejs.com/docs/connections.html
     * @returns mongoose connection
     */
    init() {
        this.connection = mongoose.connect(this.url);
        return this.connection
    }

}

module.exports = Mongo