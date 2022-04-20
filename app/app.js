/*
Nivell 1
- Exercici 1
Crea un servidor amb Express que retorni a una petició GET a l'endpoint
 /user un json amb el teu nom, edat i la url des d'on es fa la petició.
*/

const express = require('express');
const app = express();
const bodyParser = require('body-parser');  // para leer body petición POST

app.use(bodyParser.json());

const PORT = 5555;

// Nivel 1 Ejercicio 1
app.get('/user', (req, res) => {
    res.json({
        name: 'Luis',
        edad: 41,
        url: req.hostname  // TODO: ¿url desde donde se hace la petición"
    });
});

/*
- Exercici 2
Afegeix un endpoint /upload per a pujar al servidor un arxiu de tipus 
png, jpg o gif que retorni un missatge d'error en cas que 
l'extensió de l'arxiu no coincideixi amb aquestes.
*/
// https://ed.team/blog/como-subir-archivos-al-servidor-con-nodejs
// Nivel 1 Ejercicio 2
app.post('/upload', (req, res) => {
    console.log(req.url);
    res.json({
        status:"OK"
    });
});









app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
    



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

/*
Nivell 3
- Exercici 1
Afegeixi un middleware a l'endpoint anterior que retorni un HTTP 
Status 401 - Unauthorized si la capçalera de la petició no conté 
autenticació bàsica (usuari i contrasenya).
*/