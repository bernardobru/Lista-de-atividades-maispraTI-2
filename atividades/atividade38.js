const prompt = require('prompt-sync')();
function criaVetor(tamanho) {
    const vetor = new Array(); 
    for (let i = 0; i < tamanho; i++) {
        vetor[i] = Math.round(Math.random() * 10);
    }
    return vetor;
}
function realizarOperacao() {
    const escolha = parseInt(prompt("Escolha uma operação(1-soma os elementos 2-multiplicar os elementos 3-média dos elementos 4-ordenar em ordem crescente 5-mostrar o vetor) "))
    switch(escolha) {
        case 1:
            let soma = 0;
            vetor.forEach((elemento) => {soma += elemento});
            console.log(soma);
            break;
        case 2:
            produto = 1;
            vetor.forEach((elemento) => {produto *= elemento});
            console.log(produto);
            break;
        case 3:
            let somaMedia = 0;
            vetor.forEach((elemento) => {somaMedia += elemento});
            let media = somaMedia / vetor.length;
            console.log(media.toFixed(2));
            break;
        case 4:
            for (let i = 0; i < vetor.length; i++) {
                let trocou = false;
                for (let j = 0; j < vetor.length - 1; j++) {
                    if (vetor[j] > vetor[j + 1]) {
                        let temp = vetor[j];
                        vetor[j] = vetor[j + 1];
                        vetor[j + 1] = temp;
                        trocou = true;
                    }
                }
                if (!trocou) {
                    break;
                }
            }
            console.log(`[${vetor}]`);
            break;
        case 5:
            console.log(`[${vetor}]`);
        default:
            break;
    }
    return;
}
const vetor = criaVetor(6);
realizarOperacao();