# 📊 Construction Cashflow API

API REST simples para controle de fluxo de caixa de obras, desenvolvida com Node.js, Express e PostgreSQL.

---

## 🚀 Tecnologias

- Node.js  
- Express  
- PostgreSQL  

---

## ⚙️ Como executar o projeto

```bash
# 1. Clonar o repositório
git clone https://github.com/ryuzenink-cell/construction-cashflow-api.git

# 2. Entrar na pasta
cd construction-cashflow-api

# 3. Instalar dependências
npm install
```

---

## 🗄️ Configuração do banco

Crie um banco PostgreSQL com o nome:

```
fluxo_caixa_obras
```

E configure no código:

```js
user: 'postgres',
password: '1234'
```

---

## ▶️ Executar a aplicação

```bash
node index.js
```

Servidor rodará em:

```
http://localhost:3000
```

---

## 📌 Rotas disponíveis

### 🔹 Listar obras
```
GET /obras
```

Retorna todas as obras cadastradas.

---

## 🎯 Objetivo do projeto

Projeto desenvolvido para prática de:

- Construção de APIs REST  
- Integração com banco de dados  
- Organização de backend  

---

## 👨‍💻 Autor

Adrian (Ryuzen)  
https://github.com/ryuzenink-cell
