function criaMatriz() {
    const linhas = 50;
    const colunas = 50;
    let matriz = new Array();
    for (let i = 0; i < linhas; i++) {
        matriz[i] = new Array;
        for (let j = 0; j < colunas; j++) {
            matriz[i][j] = (Math.random() * 50).toFixed(2);
        }
    }
    return matriz;
}
function getDiagonalPrincipal(matriz) {
    let diagonalPrincipal = new Array();
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[0].length; j++) {
            if (i === j) {
                diagonalPrincipal.push(matriz[i][j]);
            }
        }
    }
    return diagonalPrincipal;
}
function multiplicaPelaDiagonalPrincipal(matriz) {
    let matrizModificada = new Array();
    let diagonalPrincipal = getDiagonalPrincipal(matriz);
    for (let i = 0; i < matriz.length; i++) {
        matrizModificada[i] = new Array();
        for (let j = 0; j < matriz[i].length; j++) {
            matrizModificada[i][j] = (matriz[i][j] * diagonalPrincipal[i]).toFixed(2);
        }
    }
    return matrizModificada;
}
function imprimeMatriz (matriz) {
    for (let i = 0; i < matriz.length; i ++) {
        let linha = '';
        for (let j = 0; j < matriz[i].length; j ++) {
            linha += matriz[i][j] + ' ';
        } 
        console.log("\n")
        console.log(linha);
    }
    return;
}
const matriz = criaMatriz()
console.log("Matriz: ")
imprimeMatriz(matriz);
console.log("\n")
console.log("Matriz Modificada: ")
imprimeMatriz(multiplicaPelaDiagonalPrincipal(matriz));