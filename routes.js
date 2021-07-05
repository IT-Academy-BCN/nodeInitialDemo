const express = require('express');
const router = express.Router();
const upload = require('./middleware/storage');

router.get('/', function(req, res) {
    res.send('hello world');
});

router.get('/user', function(req, res) {
    const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    res.json({ name: "tobi", age: 30, url: fullUrl});
});

router.post('/upload', upload.single('image'), function(req, res) {
    res.send('image uploaded');
});

module.exports = router;