const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Nicacios@123',
    database: 'mydb'
});

db.connect((err) => {
    if (err) {
        console.log('Erro ao conectar:', err);
        return;
    }

    console.log('Conectado ao MySQL!');
});

module.exports = db;