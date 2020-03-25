const express = require('express');
const cors = require('cors');
const routes = require('./routes');

// Variável para executar o express
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// Escutar em localhost:3333, ou seja, porta 3333
// Cannot GET / -> rota nao existe
app.listen(3333);