const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '1239090100',
    database: 'agenda-petshoop'
})

module.exports = conexao
