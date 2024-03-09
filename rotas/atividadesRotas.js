const {Router} = require('express');
const AtividadesControlador = require('../controladores/AtividadesControlador.js');

const router = Router();

//rotas
router.get('/atividades', AtividadesControlador.listarAtividades); // lista todas atividades
router.get('/atividades/:id', AtividadesControlador.selecionarAtividadePorId); // seleciona uma atividade especifica
router.post('/atividades', AtividadesControlador.criarAtividade); // cria uma nova ativiade
router.put('/atividades/:id', AtividadesControlador.modificarAtividade); // modifica atividade
router.delete('/atividades/:id', AtividadesControlador.deletarAtividade); // deleta uma Atividade

module.exports = router;