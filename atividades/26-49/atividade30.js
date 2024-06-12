function criaMatriz() {
    const linhas = 5;
    const colunas = 5;
    let matriz = new Array();
    for (let i = 0; i < linhas; i++) {
        matriz[i] = new Array;
        for (let j = 0; j < colunas; j++) {
            matriz[i][j] = Math.round(Math.random() * 10);
        }
    }
    return matriz;
}
function somaLinhasEColunas(matriz) {
    let somaLinhas = new Array();
    let somaColunas = new Array();
    for (let i = 0; i < matriz.length; i++) {
        let soma = 0;
        for (let j = 0; j < matriz[i].length; j++) {
            soma += matriz[i][j];
        }
        somaLinhas.push(soma);
    }
    for (let i = 0; i < matriz.length; i++) {
        let soma = 0;
        for (let j = 0; j < matriz[i].length; j++) {
            soma += matriz[j][i];
        }
        somaColunas.push(soma);
    } 
    return [somaLinhas, somaColunas];
}
function imprimeVetor(vetor) {
    console.log(`Soma das linhas: ${vetor[0]}`);
    console.log(`Soma das colunas: ${vetor[1]}`);
}
const matriz = criaMatriz();
console.table(matriz);
imprimeVetor(somaLinhasEColunas(matriz))