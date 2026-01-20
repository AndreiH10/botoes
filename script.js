function botaoAtivado(botao){
    if(botao.style.backgroundColor === "blue"){
        botao.style.backgroundColor = "aqua";
    }
    else{
        botao.style.backgroundColor = "blue";
    }
}

 async function mudarStatus(novoEstado) {

    await fetch('http://127.0.0.1:8000/set-status', {

        method: 'POST', // O método para "setar" informações

        headers: {

            'Content-Type': 'application/json'

        },

        body: JSON.stringify({ ligado: novoEstado }) // Transforma o objeto JS em JSON

    });

}

const botoes = document.querySelectorAll('.btn');

botoes.forEach(botao => {
    botao.addEventListener('click', function() {
        // 1. Alterna a classe visual
        this.classList.toggle('clicado');

        // 2. Verifica se está clicado e envia o status
        const estaAtivo = this.classList.contains('clicado');
        mudarStatus(estaAtivo);
        
    });
});