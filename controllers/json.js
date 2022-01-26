const fs = require('fs')
const path = './database/tasks.json'
// Inicia lectura de Json <--
const readJson = () => { 
  let dbcache = JSON.parse(fs.readFileSync(path))
     return dbcache
  }
// Fin de lectura del Json
// -->


// <!--- Inicio escritura del Json
const writeJson = (data) => {
  fs.writeFile(path, data, err => {
    if (err)
      throw err // error checking
  })
}
// -->
module.exports = { readJson, writeJson }