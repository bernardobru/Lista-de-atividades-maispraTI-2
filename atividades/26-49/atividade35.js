function criaVetor(tamanho) {
    const vetor = new Array();
    for (let i = 0; i < tamanho; i ++) {
        vetor[i] = Math.round(Math.random() * 50) + 1;
    }
    return vetor;
}
function parOuImpar(vetor) {
    console.log(`Vetor Original: ${vetor}`);
    let vetorPar = new Array();
    let vetorImpar = new Array();
    for (let valores of vetor) {
        if (valores % 2 == 0) {
            vetorPar.push(valores);
            if (vetorPar.length == 5) {
                console.log(`Vetor de Pares: ${vetorPar}`);
                vetorPar = new Array();
            }
        } else {
            vetorImpar.push(valores);
            if (vetorImpar.length == 5) {
                console.log(`Vetor de Ímpares: ${vetorImpar}`);
                vetorImpar = new Array();
            }
        }
    }
    if (vetorPar.length > 0) {
        console.log(`Vetor de Pares: ${vetorPar}`);
    }
    if (vetorImpar.length > 0) {
        console.log(`Vetor de Ímpares: ${vetorImpar}`);
    }
    return;
}
const vetor = criaVetor(30);
parOuImpar(vetor); 