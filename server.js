
const fileupload = require('express-fileupload'); //por defecto asume que es un modulo 
const express = require('express'); //por defecto asume que es un modulo 
const port = 8000;
const app = express();


app.use(fileupload());

app.listen(port, ()=>{
    console.log('server is listening to port 8000');
});

function sendResponse(req, res, data){ //anadimos el objeto req para leerlo en el valor del parametro url
    if(!data){
        res.json({
            success: false,
            message: 'Not found'
        })
    }else{
        res.json({
            success: true,
            data: data,
            url: req.protocol + '://' + req.get('host') + req.url 
        })
    }
}

app.get('/users', (req, res) =>{
    const data = require('./user.json');    
    sendResponse( req, res, data);
    });


app.post('/upload', (req, res) => {
    const uploadedName = req.files.file.name;
    const extension = uploadedName.split('.').pop();
    if (['png', 'gif', 'jpg'].includes(extension)) {
        res.send('fichero valido');
    } else {
        res.status(400).send('Fichero invalido');
    }
});
    