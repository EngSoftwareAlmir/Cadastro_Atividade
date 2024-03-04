const connect = require('../db.js');

class AtividadesControlador{

    // listar todas as atividades
    static async listarAtividades(req, res){
        
        const queryValues = Object.values(req.query);
        console.log(queryValues);
        
        try{
            const conn = await connect();
           
            if(queryValues[0] == null && queryValues[1] == null){
                const [rows] = await conn.query('SELECT *FROM Atividades;');
                res.status(200).json(rows); //envia resultado como json
                return ;
            } 
            else if(queryValues[0] != null && queryValues[1] == null){
                const [rows] = await conn.query('SELECT *FROM Atividades WHERE disciplina = ?;', [queryValues[0]]);
                res.status(200).json(rows); //envia resultado como json
                return ;
            } 
            else if(queryValues[0] != null && queryValues[1] != null){
                const [rows] = await conn.query('SELECT *FROM Atividades WHERE disciplina = ? AND assunto = ?;', [queryValues[0], queryValues[1]]);
                res.status(200).json(rows); //envia resultado como json
                return ;
            }         
        }
        catch(error){
            console.error('Erro ao listar Atividade:', error);
            res.status(500).json({error: 'Erro interno do servidor'});
        }
    };    

    //selecionar uma atividade por id
    static async selecionarAtividadePorId(req, res){
        const atividadeId = req.params.id;
        try{
            const conn = await connect();
            const [rows] = await conn.query("SELECT *FROM Atividades  WHERE id = ?; ", [atividadeId]);           
            res.status(200).json(rows);
        }
        catch(error){
            console.error('Erro ao selecionar atividade por id:', error);
            res.status(500).json({error: 'Erro interno do servidor'});
        }
    };
}

module.exports = AtividadesControlador;