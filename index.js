const express = require('express');
const app = express();

const { config } = require('./config/index.js');

const upload = require('./libs/storage');

app.get('/', function(req, res) {
    res.send('hello world');
});

app.get('/user', function(req, res) {
    const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    res.json({ name: "tobi", age: 30, url: fullUrl});
});

app.post('/upload', upload.single('image'), function(req, res) {
    res.send('image uploaded');
});

app.listen(config.port, function() {
    console.log(`Listen http:/localhost:${config.port}`);
});