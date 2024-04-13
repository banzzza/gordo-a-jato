const express = require('express');
const router = express.Router();
const path = require('path');

// Importar a conexão com o banco de dados
const db = require('../db'); // Ajuste o caminho conforme a estrutura do seu projeto

// Rota para exibir o formulário de cadastro
router.get('/', (req, res) => {
  // Construir o caminho absoluto até o arquivo cadastro.html
  const filePath = path.join(__dirname, '../public/cadastro.html');
  
  // Enviar o arquivo para o cliente
  res.sendFile(filePath);
});

// Rota para lidar com o envio do formulário (POST)
router.post('/', (req, res) => {
  const { nome, endereco, telefone, email, cpf } = req.body;
  const sql = 'INSERT INTO Cliente (cli_nome, cli_endereco, cli_telefone, cli_email, cli_cpf) VALUES (?, ?, ?, ?, ?)';
  
  // Executar a consulta SQL para inserir os dados do cliente no banco de dados
  db.query(sql, [nome, endereco, telefone, email, cpf], (err, result) => {
    if (err) {
      console.error('Erro ao cadastrar cliente:', err);
      return res.status(500).send('Erro ao cadastrar cliente');
    }
    console.log('Cliente cadastrado com sucesso!');
    res.send('Cadastro realizado com sucesso!');
  });
});

module.exports = router;
