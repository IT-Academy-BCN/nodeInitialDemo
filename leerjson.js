const fs = require('fs');
const { join } =  require('path');
const inbox = join(__dirname,'database');
const outbox = join(__dirname,'database');

let rawtodo = fs.readFileSync('./database/tasks.json');
const db = JSON.parse(rawtodo);
console.table(db.tasks)

let dbcache  = db.tasks
// console.log(typeof(dbcache));

