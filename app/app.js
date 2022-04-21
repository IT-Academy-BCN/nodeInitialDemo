const express = require('express');
const app = express();
const bodyParser = require('body-parser');  // para leer body petición POST
const fileUpload = require('express-fileupload');
// multer
const path = require('path');

app.use(bodyParser.json());

app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));

const PORT = 5555;

// Nivel 1 Ejercicio 1 ##################################################################
app.get('/user', (req, res) => {
    res.json({
        name: 'Luis',
        edad: 41,
        url: req.hostname + req.originalUrl
    });
});

// Nivel 1 Ejercicio 2 ##################################################################
app.post('/upload', (req, res) => {
    
    const img = req.files?.imgfile;
    //const img = (req.files) ? req.files.img : null; 
    
    if (!img) { // !req.files || !req.files.imgfile
        res.json({
            status: "Error",
            msg: "No se ha subido fichero"
        });
        return;
    }        

    const imgNameArr = img.name.split('.');
    const imgExt = imgNameArr[imgNameArr.length-1].toLowerCase();
    const extensionesValidas = ['png','jpg','gif'];

    if (!extensionesValidas.includes(imgExt)){
        res.json({
            status: "Error",
            msg: "Extensión " + imgExt + " no válida. Las extensiones válidas son: " + extensionesValidas
        });
        return;
    }
    
    const f = (new Date()).toISOString();
    const marcaFecha = f.replaceAll(':','-').replace('T','-').replace('.','-').replace('Z','');
    console.log(marcaFecha);

    const imgPath = path.join(__dirname, "/uploads/", marcaFecha  + "-" + img.name);

    img.mv(imgPath, ( err ) => {
        if ( err ){
            res.json({
                status: "Error",
                err
            });
        }

        res.json({
            status:"OK",
            msg: "imagen subida"
        });
    });    
});


// Nivel 2 Ejercicio 1 ##################################################################
/*
Nivell 2
- Exercici 1
Creu un endpoint /time que rebi per POST com a paràmetre un JSON 
amb el nom d'usuari i retorni un objecte JSON que contingui l'hora 
i data actual. Inclogui un middleware que afegeixi la 
capçalera Cache-control: no-cache. Habiliti CORS (Cross-Origin Resource 
Sharing) en les respostes, ja sigui mitjançant Express o mitjançant 
un altre middleware.
*/




// Nivel 3 Ejercicio 1 ##################################################################
/*
Nivell 3
- Exercici 1
Afegeixi un middleware a l'endpoint anterior que retorni un HTTP 
Status 401 - Unauthorized si la capçalera de la petició no conté 
autenticació bàsica (usuari i contrasenya).
*/




// 404
app.use((req, res, next) => {
    res.status(404).send('Ups! not found');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
    


