
class VisualizacoesControlador{
    static exibirHome(req, res){
        res.render('home',{});
    };

    static exibirPaginaPesquisarAtividade(req, res){
        return res.status(200).end('Página de Pesquisar Atividade')
    }

    static exibirPaginaCriarAtividade(req, res){
        return res.status(200).end('Pagina de Criar Atividades');
    };

    static exibirPaginaModificarAtividade(req, res){
        return res.status(200).end('Página de Modificar Atividades');
    }
}

module.exports = VisualizacoesControlador;