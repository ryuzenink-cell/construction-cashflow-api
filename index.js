const express = require('express');  // Importação do framework EXPRESS
const { Client } = require('pg');    // Importação do Client da biblioteca do PostgreSQL

const app = express();               // Criação da aplicação EXPRESS onde 'app' é o servidor
const port = 3000;                   // Definição da porta onde o servidor irá rodar

// Criação de um cliente de conexão com o PostgreSQL
const client = new Client({
  host: 'localhost',                 // Banco rodando na própria máquina
  port: 5432,                        // Porta padrão do PostgreSQL
  user: 'postgres',                  // User do banco de dados
  password: '1234',                  // Senha do banco de dados (⚠️ em produção nunca deixar assim no código ⚠️)
  database: 'fluxo_caixa_obras'      // Banco de dados da nossa API REST
});

// Tenta conexão com o Banco de dados
client.connect()
  .then(()=> console.log('Conectado ao PostgreSQL'))                        // Se der certo 'Conectado ao PostgreSQL'
  .catch((error)=> console.error('Erro ao conectar no Postgree:', error));  // Se der errado 'Erro ao conectar no Postgree:' + mensagem

  //Criação da rota obras
app.get('/obras', async(req, res) => {
  
  // Iniciação de um bloco de tratamento de erro
  try{
    const result = await client.query('SELECT * FROM obras'); // Busca todas as obras da tabela obras; 'await' espera a resposta do banco
    res.json(result.rows);                                    // Retorna os dados em JSON
  }
  
  // Executa se der erro na query
  catch (error) {
    console.error('Erro ao buscar obras:', error);            // Mostra uma mensagem de erro no console
    res.status(500).json({ erro: 'Erro ao buscar obras' });   // Retorna erro para o cliente 'Status HTTP 500' = erro interno do servidor
  }
});

//Faz o servidor começar a rodar, ouvindo na porta definida na função 'port' (const port = 3000)
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});