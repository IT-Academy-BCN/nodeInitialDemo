const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload');

const { notCached } = require('./middlewares/CacheMiddleware');
const { basicAuth } = require('./middlewares/AuthMiddleware');
const app = express()

// Middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(notCached);
app.use(basicAuth);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload({
    createParentPath: true
}));

// Endpoints
app.get('/user', (req, res) => res.send({
    name: 'David',
    age: 26,
    requestedFrom: req.headers.host
}));

app.post('/upload', (req, res) => {

    if (!req.files.image) {
        res.status(400).send('No file uploaded. Expected "image" field and being non empty');
    }

    if (!req.files.image.mimetype.includes('image')) {
        res.status(400).send('File mimetype is not an image');
    }

    //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
    const image = req.files.image;

    //Use the mv() method to place the file in upload directory (i.e. "uploads")
    image.mv('../uploads/' + image.name);

    //send response
    res.send({
        status: true,
        message: 'File is uploaded',
        data: {
            name: image.name,
            mimetype: image.mimetype,
            size: image.size
        }
    });
});

app.post('/time', (req, res) => {
    const date = new Date();
    res.send({
        time: date.toLocaleString()
    });
});

app.listen(3000, () => console.log('App listening on port 3000!'))

module.exports = {
    app
}
