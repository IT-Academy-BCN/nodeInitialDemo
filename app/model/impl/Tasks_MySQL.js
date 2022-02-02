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

async function executaQuery(query, args){
    return new Promise((resolve, reject) => {
        // Formata i afegeix args
        if(args)
            query = mysql.format(query, args);
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
            "task t JOIN user u ON t.author_id = u.id",
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
            "name = ?",
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
        "task t JOIN user u ON t.author_id = u.id"
    );
}

async function saveNewTask(task) {
    // Inicialitza els valors per defecte que calgui
    if(task.state == null)
        task.state = 'pending';
    if(task.start_time == null)
        task.start_time = new Date();

    // Troba id d'usuari si existeix
    let author_id = (await getUserId(task.author)).id;

    // Si no exiteix, crea'l
    if(!author_id)
        author_id = (await sqlInsert(
            "user(id, name)",
            "(?, ?)",
            [null, task.author]
        )).insertId; // Inserted id retornada

    // Afegeix FK task
    task.author_id = author_id;

    // Crea task
    task.id = (await sqlInsert(
        "task(id, description, state, start_time, end_time, author_id)",
        "(null, ?, ?, ?, ?, ?)",
        [task.text, task.state, task.start_time, task.end_time, task.author_id]
    )).insertId; // Guarda la id autogenerada a l'insert
}

async function updateTask(id, task) {
    // Recupera FK d'author
    task.author_id = await getUserId(task.author_id);

    // Si no existeix, crea'l
    if(!task.author_id)
        task.author_id = await sqlInsert(
            "user(id, name)",
            "(null, ?)",
            [task.author]
        )

    // Update task
    await sqlUpdate(
        `description=?,state=?,start_time=?,end_time=?,author_id=?`,
        `id=?`,
        [task.text, task.state, task.start_time, task.end_time, task.author_id, task.id]
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


async function deleteAll() {
/*
// NO FUNCIONA
    // FONT: https://www.npmjs.com/package/execsql
    // FONT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comma_Operator#processing_and_then_returning
    const execsql = require('execsql'),
        dbConfig = {
            host: `${process.env.MYSQL_HOST}`,///${process.env.MYSQL_DATABASE}`,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
        },
        sql = `use ${process.env.MYSQL_DATABASE};`,
        sqlFile ='./mysql_scripts/mysql_schema.sql';
    execsql.config(dbConfig)
        .exec(sql)
        .execFile(sqlFile, (err, results) => {
            console.log(results);
        }).end();

 */
    /*
    // NO FUNCIONA
    return new Promise((resolve, reject) => {
        // FONT: https://stackoverflow.com/a/31710270
        const fs = require('fs');
        const readline = require('readline');

        const rl = readline.createInterface({
            input: fs.createReadStream('./mysql_scripts/mysql_schema.sql'),
            terminal: false
        });
        rl.on('line', chunk => {
            pool.query(chunk.toString(), err => {
                if(err)     reject();
                else        resolve();
            });
        });
        rl.on('close', function(){
            console.log('mysql_schema.sql closed');
        });
    })

     */
    // FUNCIONA
    await sqlDelete("task");
    await sqlDelete("user");
}


async function demo(){
    console.log("Demo MySQL App Running...");

    // Restart de database a cada rerun de demo
    await deleteAll();

    // Crea task
    let task1 = {
        text: 'Crear TO-DO app',
        author: 'Guillem Parrado'
        // No cal state: és required però s'inicialitza sol a 'pending'
        // No cal start_date: és required però s'inicialitza sol a current time
    }

    // Guarda task
    const task1_id = await saveNewTask(task1);



    // Crea second task
    let task2 = {
        text: '2nd Task',
        author: 'Laura O'
    };

    // Save task
    const task2_id = await saveNewTask(task2);

    // Crea third task
    let task3 = {
        text: '3rd Task',
        author: 'Anon.'
    };

    // Save task
    const task3_id = await saveNewTask(task3);

    // Recupera tots els tasks
    const tasks = await getAllTasks();
    console.log(tasks);

    // Recupera un task a partir d'una id
    const recovered_1st_task = await getTask(task1.id);      // recupera 1r task
    console.log(recovered_1st_task);

    /*
    // Modifica un task
    const recovered_2nd_task = await getTask(task2_id);             // recupera 2n task
    recovered_2nd_task.author = "Patricia Gonzalez";                // treballem sobre task i el modifiquem
    await updateTask(recovered_2nd_task._id, recovered_2nd_task);   // Guardem canvis de tornada a DB

    // Elimina tasks
    await deleteTask(task1_id);    // A partir d'una id
    await deleteTask(task3);       // A partir d'un task

    // Finalment, torno a fer un getAll per comprovar que s'han aplicat els canvis. Hi hauria d'haver només la 2a tasca i amb l'autor modificat.
    console.log(await getAllTasks());

    // Acabo Demo
    process.exit(0);
 */
}



module.exports = {getTask, getAllTasks, saveNewTask, updateTask, deleteTask, demo}
