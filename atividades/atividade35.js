function criaVetor(tamanho) {
    let vetor = new Array();
    for (let i = 0; i < tamanho; i ++) {
        vetor[i] = Math.round(Math.random() * 10);
    }
}