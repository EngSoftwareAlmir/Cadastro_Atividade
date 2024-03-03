const connect = require('../db.js');

class AtividadesControlador{
    static async listarAtividades(req, res){
        try{
            const conn = await connect();
            const [rows] = await conn.query('SELECT *FROM Atividades;');
            conn.end();// fecha a conexão com o banco de dados

            res.json(rows); //envia resultado como json
        }
        catch(error){
            console.error('Erro ao listar Atividade', error);
            res.status(500).json({error: 'Erro interno do servidor'});
        }
    };
}

module.exports = AtividadesControlador;