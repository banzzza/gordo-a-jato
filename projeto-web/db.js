const mysql = require('mysql2');

// Configuração do MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'mydb'
});

// Conectar ao banco de dados
db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
    throw err;
  }
  console.log('Conectado ao MySQL!');
});

module.exports = db;
