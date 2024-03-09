const {Router} = require('express');
const VisualizacoesControlador = require('../controladores/VisualizacoesControlador.js');

const router = Router();

//rotas
router.get('/', VisualizacoesControlador.exibirHome);
//router.get('/pesquisaAtividades', .........) // dever ser criado o controller e a rota
router.get('/criarAtividade', VisualizacoesControlador.exibirPaginaAdicionarAtividade);
router.get('/modificarAtividade', VisualizacoesControlador.exibirPaginaEditarAtividade);

module.exports = router;