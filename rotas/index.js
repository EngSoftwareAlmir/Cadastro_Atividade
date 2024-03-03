const express = require('express');
const atividades = require('./atividadesRotas.js');

const router = express.Router();



module.exports = app =>{
    app.use(express.json());
    app.use(atividades);
}

