const express = require('express');
const https = require('https');
const fs = require('fs');
const app = express();
const port = 3000;

// Caminho para os certificados SSL
const privateKey = fs.readFileSync('private-key.pem', 'utf8');
const certificate = fs.readFileSync('certificate.pem', 'utf8');
const credentials = { key: privateKey, cert: certificate };

// Definir o objeto pessoa
const pessoa = {
  nome: 'Maria Oliveira',
  idade: 30,
  sexo: 'Feminino'
};

// Rota GET /teste
app.get('/teste', (req, res) => {
  // Pegando o IP do cliente
  const ipCliente = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  // Exibindo o IP do cliente e a porta do servidor
  console.log(`Requisição recebida de IP: ${ipCliente}, na porta: ${req.connection.localPort}`);

  // Envia o objeto pessoa como resposta
  res.json(pessoa);
});

// Criar o servidor HTTPS
https.createServer(credentials, app).listen(port, () => {
  console.log(`Servidor HTTPS rodando em https://localhost:${port}`);
});
