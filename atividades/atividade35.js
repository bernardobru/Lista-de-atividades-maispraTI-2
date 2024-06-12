function criaVetor(tamanho) {
    const vetor = new Array();
    for (let i = 0; i < tamanho; i ++) {
        vetor[i] = Math.round(Math.random() * 50);
    }
    return vetor;
}
function parOuImpar(vetor) {
    let vetorPar = new Array();
    let vetorImpar = new Array;
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] % 2 == 0) {
            vetorPar.push(vetor[i]);
        } else {
            vetorImpar.push(vetor[i]);
        }
        if (vetorPar.length == 5) {
            console.log(`${vetorPar}`);
            vetorPar = new Array();
        }
        if (vetorImpar.length == 5) {
            console.log(`${vetorImpar}`);
            vetorImpar = new Array();            
        }
    }
    return;
}
const vetorDe30 = criaVetor(30);
console.log(`${vetorDe30}`)
console.log(parOuImpar(vetorDe30));