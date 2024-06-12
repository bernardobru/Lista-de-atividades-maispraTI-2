const prompt = require('prompt-sync')();
function criaMatriz(linhas, colunas) {
    let matriz = new Array();
    for (let i = 0; i < linhas; i++) {
        matriz[i] = new Array;
        for (let j = 0; j < colunas; j++) {
            matriz[i][j] = Math.round(Math.random() * 10);
        }
    }
    return matriz;
}
function multiplicaElementos(M, A) {
    let V = new Array();
    for (let i = 0; i < M.length; i ++) {
        let produto = 0;
        for (let j = 0; j < M[i].length; j++) {
            produto = M[i][j] * A;
            V.push(produto);
        }
    }
    return V;
}
function imprimeVetor(v, a) {
    console.log(`Os elementos desse vetor são o produto dos elementos da matriz multiplicada por ${a} :`)
    console.table(v);
    return;
}
const valor = parseInt(prompt("Insira um valor: "));
const matriz = criaMatriz(6,6);
console.table(matriz);
imprimeVetor(multiplicaElementos(matriz, valor), valor);