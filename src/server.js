
//const fileupload = require('express-fileupload'); //por defecto asume que es un modulo 
const express = require('express'); 
const port = process.env.PORT || 8000;
const path = require('path');


const app = express();

// Settings 
//app.use(fileupload());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//Middlewares: antes de recibir la imagen tiene que procesarla



// Routes
app.use(require('./routers/router'));


//verifying extension

// app.post('/upload', (req, res) => {
//     const uploadedName = req.files.file.name;
//     const extension = uploadedName.split('.').pop();
//     if (['png', 'gif', 'jpg'].includes(extension)) {
//         res.send('fichero valido');
//     } else {
//         res.status(400).send('Fichero invalido');
//     }
// });

//Start server
app.listen(port, ()=>{
    console.log('server is listening to port 8000');
});
    