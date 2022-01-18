const fs = require('fs');

//mauricio ->
// let rawtodo = fs.readFileSync('./database/tasks.json');
// const db = JSON.parse(rawtodo);
// console.table(db.tasks)

//pere -->
let rawtodo = fs.readFileSync('../database/tasks.json');
const db = JSON.parse(rawtodo);
console.table(db.tasks)

let dbcache  = db.tasks
//console.log(typeof(dbcache));
