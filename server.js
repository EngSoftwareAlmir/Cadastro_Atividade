require('dotenv').config();
const express = require('express');
const routes = require('./rotas/index.js');
const path = require('path');

const app = express(); 
routes(app);

const port = process.env.PORT || 4500;

//configurando engine
app.set('views', path.join(__dirname,'visualizacoes'));//apontando para o diretorio
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
//configuração de arquivos estáticos
app.use('/estaticos', express.static(path.join(__dirname, 'arquivos')));

//criando o servidor
app.listen(port, ()=>{
    console.log(`Servidor rodando no endereço: http://localhost:${port}/`);    
})

module.exports = app;