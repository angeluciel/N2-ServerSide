const mysql = require ('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'produtos'
});
connection.connect((err) => {
    if (err) throw err;
    console.log('Conectado com sucesso!');
});

module.exports = connection;