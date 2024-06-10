const prompt = require('prompt-sync')();
function criaMatriz() {
    const linhas = 30;
    const colunas = 30;
    let matriz = new Array();
    for (let i = 0; i < linhas; i++) {
        matriz[i] = new Array;
        for (let j = 0; j < colunas; j++) {
            matriz[i][j] = Math.round(Math.random() * 10);
        }
    }
    return matriz;
}
function valorNaMatriz(A, V) {
    let contador = 0;
    let X = []
    for (let i = 0; i < V.length; i++) {
        for (let j = 0; j < V[i].length; j++) {
            if (V[i][j] === A) {
                contador++;
            }
            if (V[i][j] !== A) {
                
                X[j] = new Array();


            }
        }
    } 
    return contador;
}
console.log(valorNaMatriz(3, criaMatriz()));