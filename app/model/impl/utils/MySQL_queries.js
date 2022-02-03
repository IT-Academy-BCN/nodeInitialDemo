
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

async function sqlSingleSelect(select, from, where, args){
    const queryResult = await sqlSelect(select, from, where, args);
    if(queryResult.length > 1)
        throw new Error('Single Select returned more than one element')
    else
        return queryResult[0];
}

async function sqlInsert(into, values, args){
    // Crea query
    let query = `INSERT INTO ${into} VALUES ${values}`;
    // Executa i retorna
    return await executaQuery(query, args);
}

async function sqlUpdate(table, set, where, args){
    // Crea query
    let query = `UPDATE ${table} SET ${set}`;
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

module.exports = {sqlSelect, sqlSingleSelect, sqlInsert, sqlUpdate, sqlDelete}
