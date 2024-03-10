const {randomUUID} = require('node:crypto');
const connect = require('../db.js');

class AtividadesControlador{

    // listar todas as atividades
    static async listarAtividades(req, res){        
        const queryValues = Object.values(req.query);        
        
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
            const [rows] = await conn.query("SELECT *FROM Atividades  WHERE id_atividade = ?; ", [atividadeId]);           
            res.status(200).json(rows);
        }
        catch(error){
            console.error('Erro ao selecionar atividade por id:', error);
            res.status(500).json({error: 'Erro interno do servidor'});
        }
    };

    //inserir nova atividade
    static async criarAtividade(req, res){
        const id_atividade = randomUUID();
        const {data_atividade, disciplina, assunto, local_projeto, fonte, observacao} = req.body;
        
        try{
            const conn = await connect();
            const retorno = await conn.query("INSERT INTO Atividades(id_atividade, data_atividade, disciplina, assunto, local_projeto, fonte, observacao) VALUES(?, ?, ?, ?, ?, ?, ?);",
            [id_atividade, data_atividade, disciplina, assunto, local_projeto, fonte, observacao]);
            res.status(200).json({message : retorno});
        }
        catch(error){
            console.error('Erro ao criar atividade:', error);
            res.status(500).json({error: 'Erro interno do servidor'});
        }
    };

    //modificar uma atividade
    static async modificarAtividade(req, res){        
        const id_atividade  = req.params.id;
        //console.log(id_atividade);
        const {data_atividade, disciplina, assunto, local_projeto, fonte, observacao} = req.body;
        //console.log(disciplina);
        try{
            const conn= await connect();
            
            const resultado = await conn.query("UPDATE atividades SET data_atividade = ?, disciplina = ?, assunto = ?, local_projeto = ?, fonte= ?, observacao = ?  WHERE id_atividade = ?;", 
            [data_atividade, disciplina, assunto, local_projeto, fonte, observacao, id_atividade] );
            
            if(resultado[0].affectedRows > 0){
                res.status(200).json({message : 'Tabela modificada!'});
            }
            else{
                res.status(404).json({mensagem: 'Atividade não encontrada!'});
            }
           
        }
        catch(error){
            console.error('Erro ao modificar atividade');
            res.status(500).json({erro: 'Erro interno do servidor'});
        }
    };

    //deletar uma atividade
    static async deletarAtividade(req, res){
        const idAtividade = req.params.id;        
        try{
            const conn = await connect();
            const retorno = await conn.query("DELETE FROM atividades WHERE id_atividade = ?;",
            [idAtividade]);

            if(retorno[0].affectedRows > 0){
                res.status(200).json({message: `Atividade de id ${idAtividade} foi deletado!`});
            }
            else{
                res.status(500).json({message: `Atividade de id ${idAtividade} não encontrado!`});
            }        
        }
        catch(error){
            console.log('Erro ao deletar a atividade');
            res.status(500).json({erro:'Erro interno do servidor!'});
        }
        
    };
}

module.exports = AtividadesControlador;


