function diagonalPrincipal () {
    let matrizIdentidade = [];
    for (let a = 0; a < 7; a ++) {
        matrizIdentidade[a] = [];   
        for (let b = 0; b < 7; b ++) {
            if (a === b) {
                matrizIdentidade[a][b] = 1;
            } else {
                matrizIdentidade[a][b] = null;
            }
        }
    } 
    return matrizIdentidade;
}
function mostraMatriz (matriz) {
    for (let i = 0; i < 7; i ++) {
        let linha = '';
        for (let j = 0; j < 7; j ++) {
            linha += matriz[i][j] + ' ';
        } 
        console.log(linha);
    }
    return;
}
console.log(mostraMatriz(diagonalPrincipal()));