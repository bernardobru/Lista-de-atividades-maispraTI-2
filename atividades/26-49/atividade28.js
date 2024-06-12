function criaMatriz() {
    const linhas = 10;
    const colunas = 10;
    let matriz = new Array();
    for (let i = 0; i < linhas; i++) {
        matriz[i] = new Array;
        for (let j = 0; j < colunas; j++) {
            matriz[i][j] = Math.round(Math.random() * 10);
        }
    }
    return matriz;
}
function imprimeAcimaDiagonalPrincipal (m) {
    let soma = 0;
    for (let i = 0; i < m.length; i++) {
        for (let j = 0; j < m[i].length; j++) {
            if (i != j && i < j) {
                soma += m[i][j];    
            }
        }
    }
    return soma;
}
function imprimeAbaixoDiagonalPrincipal (m) {
    let soma = 0;
    for (let i = 0; i < m.length; i++) {
        for (let j = 0; j < m[i].length; j++) {
            if (i !== j & i > j) {
                soma += m[i][j];    
            }
        }
    }
    return soma;
}
const matriz = criaMatriz();
console.log("Matriz: ");
console.table(matriz);
console.log(`A soma dos elementos acima da diagonal principal: ${imprimeAcimaDiagonalPrincipal(matriz)}`);
console.log(`A soma dos elementos abaixo da diagonal principal: ${imprimeAbaixoDiagonalPrincipal(matriz)}`);
