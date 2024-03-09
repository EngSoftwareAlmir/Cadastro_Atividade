
class VisualizacoesControlador{
    static exibirHome(req, res){
        return res.status(200).end('Bem vindo à Home');
    };

    static exibirPaginaAdicionarAtividade(req, res){
        return res.status(200).end('Pagina de Adicionar Atividades');
    };

    static exibirPaginaEditarAtividade(req, res){
        return res.status(200).end('Página de editar Atividades');
    }
}

module.exports = VisualizacoesControlador;