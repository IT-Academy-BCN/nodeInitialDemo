const express = require('express');
const app = express();
const fileUpload = require('express-fileupload');


// settings
app.set('port', 3000);
app.set('json spaces', 2);

// middlewares
app.use(express.json());
app.use(fileUpload());

// routes
app.get('/user', (req, res) => {
    res.json({"nombre": "Sandra Palos", "edad": "25", "ruta": "http://localhost:3000/user"});
});

app.get('/upload', (req, res) => {
    res.sendFile(__dirname + '/formulario.html');
});

// start server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')} ready!`)
})

// upload img
app.post('/upload', (req, res) => {

   let archivo = req.files.file;
   let tipo = archivo.mimetype;

   archivo.mv(`./uploads/${archivo.name}`, err => {

        if (err) return res.status(500).send({message : err });

        if (tipo == 'image/png' || tipo == 'image/gif' || tipo == 'image/jpeg') {
            res.send('File upload')
        } else {
            res.send('Tipo de archivo incorrecto');
        }

   });

});