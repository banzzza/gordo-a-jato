const express = require('express');
const bodyParser = require('body-parser');
const cadastroRoutes = require('./routes/cadastro'); // Importa as rotas de cadastro

const app = express();
const port = 3000;

// Middleware para analisar solicitações POST
app.use(bodyParser.urlencoded({ extended: true }));

// Define as rotas para o cadastro
app.use('/cadastro', cadastroRoutes);

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
