# 📦 Guia Inicial de Instalação

Este guia cobre as etapas iniciais para preparar o ambiente e rodar o
projeto localmente.

------------------------------------------------------------------------

## 📥 1. Clonar o repositório

Para obter o código-fonte do projeto, utilize o comando abaixo:

``` bash
git clone https://github.com/ryuzenink-cell/construction-cashflow-api
```

Após a execução, uma pasta com o nome do projeto será criada no seu
computador.

------------------------------------------------------------------------

## 📁 2. Entrar na pasta do projeto

Acesse a pasta do projeto utilizando o comando:

``` bash
cd construction-cashflow-api
```

👉 Este passo é essencial, pois todos os próximos comandos devem ser
executados dentro da pasta do projeto.

------------------------------------------------------------------------

## 📦 3. Instalar as dependências

Com o terminal aberto dentro da pasta do projeto, execute:

``` bash
npm install
```

### 🔍 O que esse comando faz?

-   Baixa todas as bibliotecas necessárias do projeto
-   Cria a pasta `node_modules`
-   Gera/atualiza o arquivo `package-lock.json`

------------------------------------------------------------------------

## 📚 Dependências principais

As bibliotecas instaladas incluem:

-   **express** → responsável por criar o servidor HTTP
-   **pg** → permite conexão com o PostgreSQL
-   **dotenv** → gerencia variáveis de ambiente

------------------------------------------------------------------------

## ⚠️ Observações importantes

-   Certifique-se de ter o **Node.js instalado (versão 18+)**
-   Não altere manualmente a pasta `node_modules`
-   Não envie `node_modules` para o GitHub (use `.gitignore`)

------------------------------------------------------------------------

## 🧪 Verificação

Se não houver erros durante o `npm install`, significa que o ambiente
foi configurado corretamente.

------------------------------------------------------------------------

## 🚀 Próximo passo

Após concluir estas etapas, prossiga para a configuração do arquivo
`.env` e do banco de dados.

# 🔐 Configuração de Ambiente e Banco de Dados

Este guia cobre as etapas de configuração do arquivo `.env`, verificação
do PostgreSQL e criação do banco de dados.

------------------------------------------------------------------------

## 🔐 1. Criar e configurar o arquivo `.env`

O arquivo `.env` armazena as variáveis de ambiente necessárias para
conectar a aplicação ao banco de dados.

### 📄 Passo a passo

1.  Na raiz do projeto, crie um arquivo chamado:

``` bash
.env
```

2.  Adicione as seguintes variáveis:

``` env
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=sua_senha
DB_NAME=fluxo_caixa_obras
```

### 📌 Explicação

-   `DB_HOST`: endereço do banco (localhost = sua máquina)
-   `DB_PORT`: porta padrão do PostgreSQL
-   `DB_USER`: usuário do banco
-   `DB_PASSWORD`: senha do banco
-   `DB_NAME`: nome do banco

### ⚠️ Importante

-   Nunca suba o arquivo `.env` para o GitHub
-   Adicione `.env` ao `.gitignore`

------------------------------------------------------------------------

## 🗄️ 2. Garantir que o PostgreSQL esteja instalado e em execução

### 📌 Verificar instalação

No terminal, execute:

``` bash
psql --version
```

Se retornar a versão, o PostgreSQL está instalado.

------------------------------------------------------------------------

### ▶️ Iniciar o PostgreSQL

Dependendo do sistema:

#### Windows

-   Abra o "Services" e inicie o serviço PostgreSQL

#### Linux

``` bash
sudo service postgresql start
```

#### Mac

``` bash
brew services start postgresql
```

------------------------------------------------------------------------

### 🔐 Acessar o PostgreSQL

``` bash
psql -U postgres
```

------------------------------------------------------------------------

## 🧱 3. Criar o banco de dados

Dentro do terminal do PostgreSQL, execute:

``` sql
CREATE DATABASE fluxo_caixa_obras;
```

------------------------------------------------------------------------

### 🔗 Conectar ao banco

``` sql
\c fluxo_caixa_obras;
```

------------------------------------------------------------------------

## 🧪 Verificação

Para confirmar que o banco foi criado:

``` sql
\l
```

Você deve ver `fluxo_caixa_obras` listado.

------------------------------------------------------------------------

## 🚀 Pronto!

O ambiente e o banco de dados estão configurados corretamente.

# 🚀 Execução e Validação da API

Este guia cobre as etapas finais para popular o banco com dados de teste, verificar a conexão com o PostgreSQL, iniciar o servidor, acessar a rota da API e validar se o sistema está funcionando corretamente.

---

## 🌱 1. Inserir os dados de teste

Depois de criar o banco de dados e as tabelas, conecte-se ao banco `fluxo_caixa_obras` no PostgreSQL e execute os comandos abaixo para inserir registros iniciais.

### 📌 Conectar ao banco

```sql
\c fluxo_caixa_obras;
```

### 📥 Inserir obra de teste

```sql
INSERT INTO obras (nome, cliente, saldo_inicial, data_inicio, status)
VALUES ('Residencial Primavera', 'Construtora Exemplo', 100000.00, '2026-04-10', 'ATIVA');
```

### 📥 Inserir movimentações de teste

```sql
INSERT INTO movimentacoes (obra_id, tipo, categoria, valor, descricao, responsavel, data_hora)
VALUES
(1, 'SAIDA', 'MATERIAL', 5700.00, 'Compra de materiais', 'Adrian', '2026-04-10 09:00:00'),
(1, 'SAIDA', 'MAO_DE_OBRA', 12000.00, 'Pagamento de funcionarios', 'Adrian', '2026-04-10 17:00:00'),
(1, 'ENTRADA', 'RECEBIMENTO_CLIENTE', 25000.00, 'Repasse do cliente', 'Adrian', '2026-04-11 10:00:00');
```

### 🔍 Verificando se os dados foram inseridos

```sql
SELECT * FROM obras;
SELECT * FROM movimentacoes;
```

Se tudo estiver correto, os registros recém-inseridos aparecerão no resultado.

---

## 🔗 2. Verificar se a conexão com o banco está correta

Antes de iniciar a API, confira se o arquivo `.env` está configurado corretamente.

### 📄 Exemplo de `.env`

```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=sua_senha
DB_NAME=fluxo_caixa_obras
```

### 📌 O que revisar

- O PostgreSQL está em execução
- O nome do banco está correto
- O usuário e a senha estão corretos
- A porta configurada é a mesma do PostgreSQL
- O banco `fluxo_caixa_obras` já foi criado

### 🧪 Teste esperado

Ao executar o servidor, o terminal deve exibir uma mensagem como:

```bash
✅ Conectado ao PostgreSQL
```

Se houver erro, revise o `.env`, a senha do PostgreSQL e se o serviço do banco está ativo.

---

## ▶️ 3. Executar o servidor

Com tudo configurado, inicie a aplicação com o comando abaixo na raiz do projeto:

```bash
node index.js
```

### ✅ Resultado esperado no terminal

```bash
✅ Conectado ao PostgreSQL
🚀 Servidor rodando em http://localhost:3000
```

> Dependendo do seu código atual, a segunda mensagem pode variar. O importante é que não haja erro e que a conexão com o banco aconteça com sucesso.

---

## 🌐 4. Acessar a rota da API

Com o servidor em execução, acesse a rota disponível para consultar as obras cadastradas.

### Opções para testar

- Navegador
- Insomnia
- Postman

### URL da rota

```text
http://localhost:3000/obras
```

### Requisição esperada

Método:

```text
GET
```

---

## ✅ 5. Validar o funcionamento

Agora verifique se a API está respondendo corretamente.

### 📥 Resposta esperada

Ao acessar `GET /obras`, a API deve retornar algo parecido com isto:

```json
[
  {
    "id": 1,
    "nome": "Residencial Primavera",
    "cliente": "Construtora Exemplo",
    "saldo_inicial": "100000.00",
    "data_inicio": "2026-04-10T03:00:00.000Z",
    "status": "ATIVA",
    "created_at": "2026-04-12T00:00:00.000Z",
    "updated_at": "2026-04-12T00:00:00.000Z"
  }
]
```

### 📌 O que confirmar

- O servidor iniciou sem erros
- A mensagem de conexão com o PostgreSQL apareceu
- A rota `/obras` respondeu
- Os dados da obra de teste foram retornados em JSON

### ❌ Se algo der errado

Confira estes pontos:

- O arquivo `.env` está correto
- O PostgreSQL está ligado
- O banco `fluxo_caixa_obras` existe
- As tabelas `obras` e `movimentacoes` foram criadas
- Os dados de teste foram inseridos
- O arquivo principal realmente está sendo executado com `node index.js`

---

## 🎯 Pronto!

Se todas as etapas acima funcionaram, sua API está configurada, conectada ao banco e pronta para evolução com novas rotas e operações CRUD.
