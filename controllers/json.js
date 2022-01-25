const fs = require('fs') 
// Inicia lectura de Json <--
const readJson = (path) => { 
  fs.readFile(path, (err, rawdata) => {
    if (!err) {
      let dbcache = JSON.parse(rawdata)
     //console.log(dbcache)
     return dbcache
    } 
    else {
      //console.log('No se ha podido leer el archivo')
      let emptyFile = JSON.stringify([{}],null,2);
      writeJson(emptyFile)
      //console.error(err)
    }
  })
}
// Fin de lectura del Json
// -->


// <!--- Inicio escritura del Json
const writeJson = (todos) => {
  fs.writeFile('./database/tasks.json', todos, err => {
    if(err) throw err; // error checking
  });
}
// -->
module.exports = { readJson, writeJson }