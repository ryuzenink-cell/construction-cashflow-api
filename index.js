const express = require('express');
const { Client } = require('pg');

const app = express();
const port = 3000;

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: '1234',
  database: 'fluxo_caixa_obras'
});

client.connect()
  .then(()=> console.log('Conectado ao PostgreSQL'))
  .catch(()=> console.error('Erro ao conectar no Postgree:', error));

app.get('/obras', async(requestAnimationFrame, res) => {
  try{
    const result = await client.query('SELECT * FROM obras');
    res.json(result.rows);
  }catch (error) {
    console.error('Erro ao buscar obras:', error);
    res.status(500).json({ erro: 'Erro ao buscar obras' });
  }
});

app.listen(port, () => {
  console.log('Servidor rodando em http://localhost:${port}');
});