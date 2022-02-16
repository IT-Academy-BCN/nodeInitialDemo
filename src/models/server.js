const express = require('express');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.playersPath = '/players';
        this.routes();
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

module.exports = Server;