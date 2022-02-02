/*
FONTS
- https://www.mysqltutorial.org/mysql-nodejs/
- https://riptutorial.com/javascript/example/10543/functions-with-an-unknown-number-of-arguments--variadic-functions-

ES6 Variadic + spread operator:
- a(1,2,3)
- function a(...asd){console.log(asd)} -> log rep un sol objecte i l'imprimeix: l'array d'arguments: [1,2,3]
- function a(...asd){console.log(...asd)} -> log rep 3 objectes i els imprimeix: 1,2,3

Mecanisme:
- A signatura de funció, ...asd agafa tots els arguments separats per coma, els posa dins de l'array 'asd' i el fa disponible al cos de la funció.
- A code block fa el procés invers, agafa un array i el converteix a els seus elements separats per comes per no haver-los d'enumerar estàticament.
 */

const mysql = require('mysql');
const pool = mysql.createPool({
    connectionLimit: process.env.MYSQL_POOL_CONNECTION_LIMIT,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

async function demo() {

}

async function executaQuery(query, args){
    return new Promise((resolve, reject) => {
        // Formata i afegeix args
        if(args)
            query = mysql.format(query, ...args);
        else
            query = mysql.format(query);
        // Executa i resol promise amb resultat
        pool.query(query, (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    })
}

async function sqlSelect(select, from, where, args){
    // Crea query
    let query = `SELECT ${select} FROM ${from}`;
    if(where)
        query += ` WHERE ${where}`;
    // Executa i retorna
    return await executaQuery(query, args);
}

async function sqlInsert(into, values, args){
    // Crea query
    let query = `INSERT INTO ${into} VALUES ${values}`;
    // Executa i retorna
    return await executaQuery(query, args);
}

async function sqlUpdate(set, where, args){
    // Crea query
    let query = `UPDATE SET ${set}`;
    if(where)
        query += ` WHERE ${where}`;
    // Executa i retorna
    return await executaQuery(query, args);
}

async function sqlDelete(from, where, args){
    // Crea query
    let query = `DELETE FROM ${from}`;
    if(where)
        query += ` WHERE ${where}`;
    // Executa i retorna
    return await executaQuery(query, args);
}

async function getTask(id) {
    if (id) {
        return await sqlSelect(
            "*",
            "task t JOIN user u ON t.author = u.id",
            "t.id = ?",
            [id]
        )
    }
    else
        // Podem estalviar la consulta si s'ha cridat sense id
        throw new Error("getTask hasn't been given an id");
}

async function getUserId(user_name) {
    if (user_name) {
        return await sqlSelect(
            "id",
            "user",
            "name=??",
            [user_name]
        )
    }
    else
        // Podem estalviar la consulta si s'ha cridat sense user_name
        throw new Error("getTask hasn't been given an id");
}

async function getAllTasks() {
    return await sqlSelect(
        "*",
        "task t JOIN user u ON t.author = u.id"
    );
}

async function saveNewTask(task) {
    // Inicialitza els valors per defecte que calgui
    if(task.state === null)
        task.state = 'pending';
    if(task.start_time === null)
        task.start_time = new Date();

    // Troba id d'usuari si existeix
    let author_id = await getUserId(task.author);

    // Si no exiteix, crea'l
    if(!author_id)
        author_id = await sqlInsert(
            "user(id, name)",
            "(??, ??)",
            [null, task.author]
        )

    // Afegeix FK task
    task.author_id = author_id;

    // Crea task
    task.id = await sqlInsert(
        "task(id, description, state, start_time, end_time, author)",
        "(null, ??, ??, ??, ??, ??, ??)",
        [task.description, task.state, task.start_time, task.end_time(), task.author_id]
    )
}

async function updateTask(id, task) {
    // Recupera FK d'author
    task.author_id = await getUserId(task.author);

    // Si no existeix, crea'l
    if(!task.author_id)
        task.author_id = await sqlInsert(
            "user(id, name)",
            "(null, ??)",
            [task.author]
        )

    // Update task
    await sqlUpdate(
        `description=??,state=??,start_time=??,end_time=??,author=??`,
        `id=?`,
        [task.description, task.state, task.start_time, task.end_time, task.author_id, task.id]
    )
}

async function deleteTask(object) {
    // Se li pot passar l'objecte a eliminar o directament la _id
    let id;

    // Cas: se li passa un objecte a eliminar
    if ('id' in object) {
        id = object.id;
    }
    // Cas: se li passa directament una _id
    if (typeof object === 'string') {
        id = object;
    }

    // Si input vàlid, elimina
    if (id) {
        await sqlDelete(
            "task",
            "id=?",
            [id]
        )
    }
}
/*

async function dropCreate() {
    //TODO: executar mysql_schema.sql per eliminar i tornar a crear taules
}

*/
module.exports = {getTask, getAllTasks, saveNewTask, updateTask, deleteTask, demo}
