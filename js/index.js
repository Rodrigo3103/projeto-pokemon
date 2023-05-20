


/*objrtivo 1 - quando clicar no botao de trocar de tema, adiciona a classe modo-escuro no body pra que os estilos do modo sejam aplicados e mudar a imagem pra lua*/

/* passo 1 - pegar no javascript o elemento HTML de troca de tema.*/

console.log(document.getElementById("botao-alterar-tema")); // serve pra mostrar informações no navegador//

const botaoAlterTema = document.getElementById("botao-alterar-tema");

console.log(botaoAlterTema);

// passo 2 - da um jeito de pegar no JS os elementos HTML correspondente ao body.//
const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

// passo 3- dar um jeito de indentificar os clique do usuario no botão.//

botaoAlterTema.addEventListener("click", () => {
    // 6 - remover a classe do modo-escuro do body
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");// serve pra alternar 

    if (modoEscuroEstaAtivo) {
        //passo 07 - remover a classe do modo-escuro.
        //body.classList.remove("modo-escuro"); // foi removida porque já tem o Toggle

        //passo 08 - trocar a imagens do botão da lua pro sol.

        imagemBotaoTrocaDeTema.setAttribute("src","./imagens/sun.png")
    } else {

        //passo 04 -  adicionar a classe modo-escuro no body.
        //body.classList.add("modo-escuro"); // foi removida porque já tem o Toggle

        // passo 5 - trocar a imagem do tema pra lua. 
        imagemBotaoTrocaDeTema.setAttribute("src", "./imagens/moon.png")

    }


});






