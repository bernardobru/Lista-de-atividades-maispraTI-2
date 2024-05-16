function preencheVetor () {
    let array = [];
    for (let i = 0; i < 20; i++) {
        let numero = Math.round(Math.random() * 100);
        array.push(numero);
    };
    console.log(`Array original: ${array}`)
    return array;
};
function ordenaVetor (vetor) {
    vetor.sort((a, b) => {
        return a - b;
    });
    return `Array ordenado de forma crescente: ${vetor}`;
};
console.log(ordenaVetor(preencheVetor()));