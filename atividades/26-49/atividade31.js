const prompt = require('prompt-sync')();
const A = parseInt(prompt("Digite um número inteiro: "));
function criaMatriz() {
    const linhas = 30;
    const colunas = 30;
    let matriz = new Array();
    for (let i = 0; i < linhas; i++) {
        matriz[i] = new Array;
        for (let j = 0; j < colunas; j++) {
            matriz[i][j] = Math.round(Math.random() * 50);
        }
    }
    return matriz;
}
function valorNaMatriz(A, V) {
    let contadorIgual = 0;
    let contadorDiferente = 0;
    let X = new Array();
    for (let i = 0; i < V.length; i++) {
        X[i] = new Array
        for (let j = 0; j < V[i].length; j++) {
            if (V[i][j] === A) {
                contadorIgual++;
            }
            if (V[i][j] !== A) {
                contadorDiferente++;
                X[i][j] = V[i][j];
            } else {
                X[i][j] = null;
            }
        }
    } 
    return [X, contadorIgual];
}
function imprimeResultado(resultado) {
    console.table(resultado[0]);
    console.log(`O número ${A} apareceu ${resultado[1]} vezes na matriz`)
}
const matriz = criaMatriz();
const matrizDiferente = valorNaMatriz(A, matriz);
imprimeResultado(matrizDiferente);