const {Router} = require('express');
const AtividadesControlador = require('../controladores/AtividadesControlador.js');

const router = Router();

//rotas
router.get('/', AtividadesControlador.listarAtividades);

module.exports = router;