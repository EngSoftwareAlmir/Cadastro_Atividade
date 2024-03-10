const {Router} = require('express');
const VisualizacoesControlador = require('../controladores/VisualizacoesControlador.js');

const router = Router();

//rotas
router.get('/', VisualizacoesControlador.exibirHome);
router.get('/pesquisarAtividades', VisualizacoesControlador.exibirPaginaPesquisarAtividade) // dever ser criado o controller e a rota
router.get('/criarAtividade', VisualizacoesControlador.exibirPaginaCriarAtividade);
router.get('/modificarAtividade', VisualizacoesControlador.exibirPaginaModificarAtividade);

module.exports = router;