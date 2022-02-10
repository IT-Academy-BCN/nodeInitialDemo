 const express    = require('express');
 const app        = express();
 const fileUpload = require('express-fileupload');
 const bodyParser = require('body-parser');
 const addHeader = require('./middlewareHeader')
 const checkHeader = require('./middlewareCheck')


app.use(fileUpload());
app.use(bodyParser.json());

app.get('/user', (req, res) => {
    const url = req.url;
    res.json({ name: "xavier", edat: 48, url: url })
});

app.post('/upload', (req, res) => {

    const clientFile = req.files.file
    const extension = clientFile.name.split(".").pop()

    if (extension != "jpg"|"png"|"gif") {
        return res.status(428).send({ message: "only [ jpg | png | gif ] files are allowed "})
    } else {
        clientFile.mv(`./upload_file/${clientFile.name}`, err => {
            if (err) {
                return res.status(500).send({ message: "upload error"})
            } else {
                return res.status(200).send({ message: "File upload!" })
            }
        });
    };
});

app.post('/time', addHeader, checkHeader, (req, res) => {

    const username = req.body.name;
    const timeEnlapsed = Date.now();
    const now = new Date(timeEnlapsed);
    const date = now.toUTCString();


    res.status(200).send({ name: username, date: date })

})

app.listen(3000, () => {
    console.log('ServerOk!')
});
