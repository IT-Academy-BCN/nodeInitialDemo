const express = require('express');
const app = express();
const { config } = require('../config/index.js');

app.use(require('../routes.js'));

app.listen(config.port, function() {
    console.log(`Listen http:/localhost:${config.port}`);
});

module.exports = app;