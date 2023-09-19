const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () => {

    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");
    
    body.classList.toggle("modo-escuro");

    if (modoEscuroEstaAtivo) {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/disco-voador-dia-png.jpg", "src", "./src/imagens/galaxia-gif-png.gif" , "src", "./src/imagens/chuva-de-meteros-gif-png.gif")
    } else {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/disco-voador-noturno-png.jpg", "src", "./src/imagens/buraco-negro-gif.png")
    }
})