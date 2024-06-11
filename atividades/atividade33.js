function criaMatriz() {
    const linhas = 3;
    const colunas = 3;
    let matriz = new Array();
    for (let i = 0; i < linhas; i++) {
        matriz[i] = new Array;
        for (let j = 0; j < colunas; j++) {
            matriz[i][j] = Math.round(Math.random() * 50);
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
function getDiagonalSecundaria(matriz) {
    let diagonalSecundaria = new Array();
    let elemento = 0;
    let i = 0
    while (i < matriz[0].length) {
        for (let j = matriz[0].length - 1; j >= 0; j--) {
            elemento = matriz[i][j]; 
            i++;
            diagonalSecundaria.push(elemento)
        }
    }
    return diagonalSecundaria;
}
function mediaElementos(vetor) {
    let soma = 0;
    vetor.forEach((elementos) => {
        soma += elementos;
    });
    let media = soma / vetor.length;
    return media;
}
function multiplicaPelaMedia(principal, mediaSecundaria) {
    principal.forEach((elementos) => {
        let produto = parseInt(elementos * mediaSecundaria);
        console.log(`${elementos} X ${mediaSecundaria}: ${produto}`);
    });
    return;
}
const matriz = criaMatriz();
const diagonalPrincipal = getDiagonalPrincipal(matriz);
const diagonalSecundaria = getDiagonalSecundaria(matriz);
const media = mediaElementos(diagonalSecundaria).toFixed(2);
console.table(matriz);
console.log(`Diagonal principal: ${diagonalPrincipal}`)
console.log(`Diagonal secundária: ${diagonalSecundaria}`)
console.log(`Média da diagonal secundária: ${media}`)
multiplicaPelaMedia(diagonalPrincipal, media);