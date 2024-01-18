alert('oi momo bem vindo ao meu jogo');
let numeroMaximo= parseInt(Math.random()*100+1);
// poderiamos ter escrito let numeroMaximo= e atribuirmos o numero maximo mais achei o modo aleatorio mais legal
let numeroSecreto= parseInt(Math.random()*numeroMaximo+1);
console.log(numeroSecreto);
let chute;
let tentativas=1;
// enquanto o numero secreto não for igual ao chute
while(chute!=numeroSecreto){
chute=prompt(`escolha um numero entre 1 e ${numeroMaximo}`);
if (chute == numeroSecreto)
 break;
else {
     if(chute>numeroSecreto){
        alert(`foi quase bb mais o numero Secreto é menor que ${chute}`); 
    } else {
        alert(`foi quase bb mais o numero Secreto é maior que ${chute} `);
    }
tentativas++;
}
}
let palavratentativa = tentativas > 1? 'tentativas':'tentativa';
alert (`muito bem momo vc só precisou de ${tentativas} ${palavratentativa}`);


