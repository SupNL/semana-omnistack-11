const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

// Variável para executar o express
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

// Escutar em localhost:3333, ou seja, porta 3333
// Cannot GET / -> rota nao existe
module.exports = app;