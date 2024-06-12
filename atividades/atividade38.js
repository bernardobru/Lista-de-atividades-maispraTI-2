const prompt = require('prompt-sync')();
function criaVetor(tamanho) {
    const vetor = new Array(); 
    for (let i = 0; i < tamanho; i++) {
        vetor[i] = Math.round(Math.random() * 10);
    }
    return vetor;
}
const vetor = criaVetor(6);
function somaElementos(vetor) {
    let soma = 0;
    vetor.forEach((elemento) => {soma += elemento});
    return soma;
}
function produtoElementos(vetor) {
    produto = 1;
    vetor.forEach((elemento) => {produto *= elemento});
    return produto;
}
function mediaElementos(vetor) {
    let soma = 0;
    vetor.forEach((elemento) => {soma += elemento});
    let media = soma / vetor.length;
    return media.toFixed(2);
}
function ordenaElementosCrescente(vetor) {
    
}
function realizarOperacao(operacao) {
    switch(operacao) {
        case 1:
            somaElementos(vetor);
            break;
        case 2:
            produtoElementos(vetor);
            break;
        case 3:
            mediaElementos(vetor);
            break;
        case 4:
            ordenaElementosCrescente(vetor);
            break;
        case 5:
            mostraVetor(vetor);
            break;
        default:
            break;
    }
    return;
}
console.log(vetor);
console.log(ordenaElementosCrescente(vetor));