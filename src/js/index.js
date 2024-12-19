//O código deve fazer com que ao pertar um dos botões a página respectiva a ele apareça, por exemplo, botão 2 pagina Pagani, botão 3 pagina Ferrari...

//Criando uma variavel para pegar o click do botão
const botoesCarrossel = document.querySelectorAll(".botao");
//Criando uma variavel para pegar as imagens
const imagens = document.querySelectorAll(".imagem");
//criando uma variavel para pegar as iniformações
const informacoes = document.querySelectorAll(".informacoes");

//identificar o clique no botão para passar a tela
botoesCarrossel.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    console.log("clicou");
    //desmacar o botão anterior que deixou de ser selecionado
    desativarBotaoSelecionado();

    //Marcar o botão clicado como "Selecionado", o useja, adicionar a cor de seleção ao novo botão clicado
    marcarBotaoSelecionado(botao);

    //Remover a imagem de fundo que pertence ao botão anterior
    esconderImagemAtiva();

    //Mostrar a iamgem do botão clicado
    mostrarImagemDeFundo(indice);

    //Esconder as informaçoes do botão anteriormente selecionado
    esconderInformacoesAtivas();

    //Mostrar as informações do as informa;ca desse vloco devebotão selecionado
    mostrarInformacoes(indice);
});
});
    
    
function marcarBotaoSelecionado(botao) {
    botao.classList.add("selecionado");
}

function mostrarInformacoes(indice) {
    informacoes[indice].classList.add("ativa");
}

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add("ativa");
}

function esconderInformacoesAtivas() {
    const informacoesAtiva = document.querySelector(".informacoes.ativa");
    informacoesAtiva.classList.remove("ativa");
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
