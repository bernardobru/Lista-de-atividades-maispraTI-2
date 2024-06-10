function criaMatriz1() {
    let matriz = [];
    for (let i = 0; i < 5; i ++) {
        matriz[i] = [];
        for (let j = 0; j < 3; j ++) {
            matriz[i][j] = Math.round(Math.random() * 10); 
        }
    }
    return matriz
}
function criaMatriz2() {
    let matriz = [];
    for (let i = 0; i < 3; i ++) {
        matriz[i] = [];
        for (let j = 0; j < 5; j ++) {
            matriz[i][j] = Math.round(Math.random() * 10); 
        }
    }
    return matriz
}
function multiplicaMatriz(m1, m2) {
    for (let linhas = 0; linhas < 5; linhas++) {
        for (let colunas = 0; colunas < 5; colunas++) {
            produto = m1[linhas][colunas] * m2[colunas][linhas];
            console.log(produto);
        }
    }
}
function imprimeMatriz(matriz) {
    console.table(matriz);
    return;
}
//imprimeMatriz(criaMatriz1());
//imprimeMatriz(criaMatriz2());
imprimeMatriz(multiplicaMatriz(criaMatriz1(), criaMatriz2()));