require('dotenv').config()


// DISCUSSIÓ: TOT AIXÒ JA NO CAL FENT SERVIR AWAITS ALS FILES D'IMPLEMENTACIÓ DEL MODEL

switch (process.env.STORAGE_TYPE) {
    case "JSON": startJSONApp(); break;
    case "MYSQL": startMySQLApp(); break;
    case "MONGODB": startMongoDBApp(); break;
}

function startJSONApp() {

}

function startMySQLApp() {
    const mysql = require('mysql');
    const connection = mysql.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE
    });

    connection.connect((err) => {
        if (err) throw err;
        console.log('Connected to MySQL Server!');
    });
}

async function startMongoDBApp() {
    const mongoose = require("mongoose");
    await mongoose.connect(process.env.MONGO_URI);
    // TODO: Run app: Cridar funció d'start de la UI aquí. De moment executo demo
    await require("./model/Tasks").demo();
}



