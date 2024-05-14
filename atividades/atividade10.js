const prompt = require('prompt-sync')();
function recebeValores () {
    let continuar;
    let vetorNumeros = [];
    let menor;
    let numerosPares = 0;
    let soma = 0;
    let media = 0;
    let contador = 0;
    let valor;
    do {
        valor = parseInt(prompt("Insira um valor: "));
        vetorNumeros.push(valor);
        menor = vetorNumeros[0];
        if (valor % 2 === 0) {
            numerosPares ++;
        };
        if (valor < menor) {
            menor = valor;
        };
        contador ++;
        soma += valor;
        media = soma / contador;
        continuar = prompt("Quer continuar inserindo valores(s/n)?");
    } while (continuar === 's' || continuar === 'S');
    let vetor = [`Somatorio: ${soma}\nMenor Valor: ${menor}\nmedia dos valores: ${media.toFixed(2)}\nQuantos pares: ${numerosPares}`];
    return vetor.toString();
};
console.log(recebeValores());