const express = require('express');
const router = express.Router();

const upload = require('./middleware/storage');

const bodyParser = require('body-parser');

const cors = require('cors');

const auth = require('./middleware/auth');


router.use(bodyParser.json());

router.use((req, res, next) => {
  res.set('Cache-Control', 'no-cache');
  next();
});

router.get('/', function(req, res) {
    res.send('hello world');
});

router.get('/user', function(req, res) {
    const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    const name = 'toby';
    const age = 30;
    const player = { 'name': name, 'age': age, 'url': fullUrl };
    res.status(200).send(player);
});

router.post('/upload', upload.single('image'), function(req, res) {
    res.status(200).send({message: `Imagen subida`});
});

router.use(auth);
router.post('/time', cors(), function(req, res) {
    const currentdate = new Date(); 
    const datetime = currentdate.getHours() + ":"  
                    + currentdate.getMinutes() + ":" 
                    + currentdate.getSeconds();
    const user_name = req.body.name;
    console.log('This is CORS-enabled for a Single Route');
    res.json({name: user_name, time: datetime, date: currentdate});
    res.statusCode=200;
    res.render('error', { error: err });
    res.end("authenticated");
});

module.exports = router;