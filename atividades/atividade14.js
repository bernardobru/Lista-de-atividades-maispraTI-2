const prompt = require('prompt-sync')();
function insereNomeArray () {
    let nomes = [];
    let nome;
    for (let i = 0; i < 7; i++) {
        nome = prompt(`Insira o ${i + 1}° nome: `)
        nomes.push(nome);
    };
    console.log(`${nomes}`)
    return nomes;
};
function inverteArrayNome (vetor) {
    let nomesInverso = [];
    for (let i = 0; i < vetor.length; i++) {
        nomesInverso.unshift(vetor[i]);
    };
    return `${nomesInverso}`;
};
console.log(inverteArrayNome(insereNomeArray()));