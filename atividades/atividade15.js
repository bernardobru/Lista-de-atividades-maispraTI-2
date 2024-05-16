const prompt = require('prompt-sync')();
function revelaPares () {
    let vetor = [];
    for (let i = 0; i < 10; i++) {
        let valores = parseInt(prompt("Insira um valor: "));
        vetor.push(valores);
    };
    let vetorResultado = [];
    let vetorIndice = [];
    for (let pares in vetor) {
        if (vetor[pares] % 2 === 0) {
            vetorResultado.push(vetor[pares]);
            vetorIndice.push(pares);
        };
    };
    return `Vetor:(${vetor})\nOs elementos ${vetorResultado} estão, respectivamente, nas posições [${vetorIndice}]`;
};
console.log(revelaPares());