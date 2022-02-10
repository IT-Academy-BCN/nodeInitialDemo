 const express = require('express');
 const app = express();
 const fileUpload = require('express-fileupload')

app.use(fileUpload());

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

app.listen(3000, () => {
    console.log('ServerOk!')
});
