const fs = require('fs')
const path = './database/tasks.json'
// Inicia lectura de Json <--
const readJson = () => { 
  try {
    let dbcache = JSON.parse(fs.readFileSync(path))
    return dbcache 
  }
  catch (error) {
    let dbcache = []
    let data = JSON.stringify(dbcache,null,2)
    writeJson(data)
    return dbcache
  }
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