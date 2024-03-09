const express = require('express');
const visualizacoes = require('./visualizacoesRotas');
const atividades = require('./atividadesRotas.js');

const router = express.Router();



module.exports = app =>{
    app.use(express.json());
    app.use(visualizacoes);
    app.use(atividades);
}

