require('dotenv').config();

const fs = require('fs');
const { exit } = require('process');
const { Database } = require('./database');
const Task = require('../clases/Task');

const mongoose = require('mongoose');

class DatabaseMongo extends Database {

    async initDb() {
        console.log(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`);
        
        const mongoDB = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

        mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
        
        const tasks = new mongoose.Schema({
            id: { type: Number, default: 1 },
            status: String,
            title: String,
            createdAt: Date,
            startedAt: { type: Date, default: null },
            finishedAt: { type: Date, default: null },
            createdBy: String
        }
        , { timestamps: false });
    
        const users = new mongoose.Schema({
            name: String
        }, { timestamps: false });

        mongoose.model('Tasks', tasks);
        mongoose.model('Users', users);
    }

    constructor() {
        
        super();
        
        this.initDb();

        this.Tasks = require('mongoose').model("Tasks")
        this.Users = require('mongoose').model("Users")
    }
    
    async createUser (user) {

        let result = false;

        try {
            // Check if user is already created
            const userExist = await this.Users.findOne({ name: user });
            if (!userExist) {
                let createResult = await this.Users.create({ name: user })
                if (!createResult) {
                    result = true;
                }
            }

        } catch (err) {
           console.log(err.message);
        }
    
        return result;
    }

    async getUsers() {

        let users =  await this.Users.find();
        let names = users.map(e => e.name);
        return names;
    }

    async createTask (title, createdBy) {

        const id = await this.Tasks.countDocuments({}) + 1;

        try {
            await this.Tasks.create({
                id,
                status: 'TODO',
                title,
                createdAt: (new Date()).toISOString(),
                createdBy})
            }
         catch (err) {
           console.log(err.message);
        }
    }

    async updateTaskTitle(id, newtitle) {

        try {
            await this.Tasks.findOneAndUpdate({ id }, { title: newtitle });
        } catch (err) {
           console.log(err.message);
        }
    }

    async updateTaskStatus(id) {

        const task = await this.Tasks.findOne({id});

        if (task.status === "TODO") {
            await this.Tasks.findOneAndUpdate({ id }, { status: 'ONGOING', startedAt: (new Date()).toISOString()});
        } else if (task.status === "ONGOING") {
            await this.Tasks.findOneAndUpdate({ id }, { status: 'DONE', finishedAt: (new Date()).toISOString()});
        } else {
            // DO NOTHING
        }
    }

    async deleteTask ( id ) {
        await this.Tasks.findOneAndUpdate({ id }, { status: 'DELETED'});
    }

    async getTask( id ) {
        const task = await this.Tasks.findOne({id});
        return task;
    }

    async getTasks () {
        const tasks = await this.Tasks.find({status: { $ne: 'DELETED' }});
        return tasks;
    }
}

module.exports = { DatabaseMongo }
