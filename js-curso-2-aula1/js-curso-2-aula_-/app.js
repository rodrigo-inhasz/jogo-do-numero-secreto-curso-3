let listaDeNumerosSorteados = [];
//varivel que o numero gerado esta sendo armazenado
let numeroLimite = 10;
let numeroSecreto ;
let tentativas=1;
exibirMensagemInicial();
 numeroSecreto = gerarNumeroAleatorio () ;

// essa e a função que mostra o texto na tela
function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    }   
    function exibirMensagemInicial(){
        exibirTextoNaTela('h1','jogo do numero secreto');
        exibirTextoNaTela('p','escolha um numero entre 1 e 10'); 
    } 
    
    // essa e a função que verifica o chute
    function verificarChute (){
        let chute = document.querySelector('input').value;
        console.log ('o botão foi clicado',numeroSecreto);
    if (chute==numeroSecreto){
        exibirTextoNaTela ('h1', 'acertou!');
        let palavraTentativa = tentativas > 1?'tentativas':'tentativa';
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela ('p',mensagemTentativa);
        document.getElementById ('reiniciar').removeAttribute('disabled');
    }    
    else {
        if (chute>numeroSecreto){
            exibirTextoNaTela('p','o numero secreto é menor');
        }else{
            exibirTextoNaTela('p','o numero secreto é maior');
        }
        tentativas++;
        limparCampo ();
    }
    }
        
        // essa e a função que gera o numero secreto
function gerarNumeroAleatorio (){
    let numeroEscolhido = parseInt(Math.random()*numeroLimite+1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeElementosNaLista == numeroLimite ){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();} 
        else {
            console.log (listaDeNumerosSorteados);
            listaDeNumerosSorteados.push(numeroEscolhido)
            return numeroEscolhido;
        }
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo () {
    numeroSecreto=gerarNumeroAleatorio();
    limparCampo();
    tentativas=1;
    exibirMensagemInicial();
    document.getElementById ('reiniciar').setAttribute('disabled',true);
}