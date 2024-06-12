function criaVetor(tamanho) {
    let vetor = new Array();
    for (let i = 0; i < tamanho; i++) {
        vetor[i] = Math.round(Math.random() * 100 -70);
    }
    return vetor;
}
function removeNegativo(vetor) {
    let i = 0;
    while (i < vetor.length) {
        if (vetor[i] <= 0 || vetor[i] == null || isNaN(vetor[i])) {
            let negativo = vetor[i];
            i--;
            vetor.splice(vetor.indexOf(negativo), 1);
        }
        i++;
    }
    return vetor;
}
const vetor100 = criaVetor(100);
console.log("Vetor Original: ")
console.log(`[${vetor100}]`);
console.log("\n")
console.log("Vetor Compactado: ")
console.log(`[${removeNegativo(vetor100)}]`);