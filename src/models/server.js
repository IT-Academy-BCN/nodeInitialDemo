import express from 'express';
import { dbConnect } from '../database/config-mongoose';

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.connectDB()

        this.playersPath = '/players';
        this.routes();
    }

    async connectDB() {
        await dbConnect();
    }


    routes() {
        this.app.use(this.playersPath, require('../routes/players'));
    };

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Listenning on port ${this.port}`);
        });
    };
};

export default Server;