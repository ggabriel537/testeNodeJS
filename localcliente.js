const axios = require('axios');

// URL do servidor Node.js com HTTPS
const url = 'https://localhost:3000/teste';

// Enviando a requisição GET
axios.get(url, { httpsAgent: new require('https').Agent({ rejectUnauthorized: false }) })
  .then(response => {
    const pessoa = response.data; // A resposta é o objeto JSON
    console.log('Nome:', pessoa.nome);
    console.log('Idade:', pessoa.idade);
    console.log('Sexo:', pessoa.sexo);
  })
  .catch(error => {
    console.error('Erro ao fazer a requisição:', error);
  });
