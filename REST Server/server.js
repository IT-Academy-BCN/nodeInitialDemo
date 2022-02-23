 const express     = require('express');
 const app         = express();
 const fileUpload  = require('express-fileupload');
 const bodyParser  = require('body-parser');
 const addHeader   = require('./middlewareHeader')
 const checkHeader = require('./middlewareCheck')

app.use(fileUpload());
app.use(bodyParser.json());

app.get('/user', (req, res) => {
    const url = req.url;
    res.json({ name: "xavier", edat: 48, url: url })
});

app.post('/upload', (req, res) => {

    if (!req.files) {
        return res.status(400).send("No files were uploaded, add a valid file");
    };

    const EDFile = req.files.file
    const extension = EDFile.name.split(".").pop()
   
    switch (extension) {
        case "png":
            EDFile.mv(`.m/upload_file/ ${EDFile.name}`, err => {
                if (err) {
                    return res.status(500).send({ message: "upload error"});
                } else {
                    return res.status(200).send({ message: "File upload!" });
                }
            });
        break;
        case "jpg":
            EDFile.mv(`./upload_file/ ${EDFile.name}`, err => {
                if (err) {
                    return res.status(500).send({ message: "upload error"});
                } else {
                    return res.status(200).send({ message: "File upload!" });
                }
            });
        break;
        case "gif":
            EDFile.mv(`./upload_file/ ${EDFile.name}`, err => {
                if (err) {
                    return res.status(500).send({ message: "upload error"});
                } else {
                    return res.status(200).send({ message: "File upload!" });
                }
            });
        break;    
        default: 
            return res.status(428).send({ message: "only [ jpg | png | gif ] files are allowed "});
    };
    
});

app.post('/time', checkHeader, addHeader, (req, res) => {

    const username = req.body.name;
    const timeEnlapsed = Date.now();
    const now = new Date(timeEnlapsed);
    const date = now.toUTCString();

    res.status(200).send({ name: username, date: date })

})


app.listen(3000, () => {
    console.log('ServerOk!')
});
