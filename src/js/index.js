const imagens = document.querySelectorAll(".imagem")
const btnImagem = document.querySelectorAll(".botao")
const informacoes = document.querySelectorAll(".informacoes")

btnImagem.forEach((botao, indice) =>{
  botao.addEventListener("click", () =>{
    tirarSelecaoBotao()
    esconderImagemAtiva()
    trocarInformacao()
    selecionarBotao(indice)
    mostrarImagemAtual(indice)
    mostrarInformacaoAtual(indice)
  })
})

function tirarSelecaoBotao(){
  const btnAtivo = document.querySelector(".selecionado")
  btnAtivo.classList.remove("selecionado")
}

function esconderImagemAtiva(){
  const imagemAtiva = document.querySelector(".imagem.ativa")
  imagemAtiva.classList.remove("ativa")
}

function trocarInformacao(){
  const informacaoAtiva = document.querySelector(".informacoes.ativa")
  informacaoAtiva.classList.remove("ativa")
}

function selecionarBotao(indice){
  btnImagem[indice].classList.add("selecionado")
}

function mostrarImagemAtual(indice){
  imagens[indice].classList.add("ativa")
}

function mostrarInformacaoAtual(indice){
  informacoes[indice].classList.add("ativa")
}