function botaoAtivado(botao){
    if(botao.style.backgroundColor === "blue"){
        botao.style.backgroundColor = "aqua";
    }
    else{
        botao.style.backgroundColor = "blue";
    }
}

const botoes = document.querySelectorAll('.btn');

    botoes.forEach(botao => {
        botao.addEventListener('click', function() {
            // toggle: se não tem a classe 'clicado', ele coloca. Se já tem, ele tira.
            this.classList.toggle('clicado');
        });
    });

    