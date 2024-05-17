const prompt = require('prompt-sync')();
function progressaoAritmeticaESomaTermos (primeiroTermo, razao) {
    let termos = primeiroTermo;
    let soma = 0;
    let vetorTermos = [];
    for (let i = 0; i < 10; i++) {
        vetorTermos.push(termos);
        termos += razao;
        soma += termos;
    };
    return `Primeiros dez termos: ${vetorTermos}\nA soma dos 10 primeiros termos da progressão aritmética é ${soma}`;
};
let termoPA = parseInt(prompt("Insira o primeiro termo da progressão aritmética: "));
let razaoPA = parseInt(prompt("Insira a razão da progressão aritmética: "));
console.log(progressaoAritmeticaESomaTermos(termoPA, razaoPA));