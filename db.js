require('dotenv').config();
const mysql = require('mysql2/promise');

const {DBHOST, DBPORT, DBUSER, DBPASSWORD, DBDATABASE} = process.env;

async function connect(){
    if(global.connection && global.connection.state !== 'disconnected'){
        return global.connection;
    }

    const connection = await mysql.createConnection({
        host:DBHOST ,
        port:DBPORT ,
        user: DBUSER ,
        password: DBPASSWORD,
        database: DBDATABASE ,
    });

    console.log("Cenectado ao banco de dados!");
    global.connection = connection;
    return global.connection;
};

module.exports = connect;