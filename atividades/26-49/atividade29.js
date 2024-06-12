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
function somas(matriz) {
    let somaLinha4 = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j< matriz[i].length; j++) {
            if (i === 3) {
                somaLinha4 += matriz[i][j];
            }
        }
    }
    let somaColuna2 = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (j === 1) {
                somaColuna2 += matriz [i][j];
            }
        }
    }
    let somaDiagonalPrincipal = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (i === j) {
                somaDiagonalPrincipal += matriz[i][j];
            }
        }
    }
    let somaTotal = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            somaTotal += matriz[i][j];
        }
    }
    return [somaLinha4, somaColuna2, somaDiagonalPrincipal, somaTotal];
}
function imprimeResultado (resultado, matriz) {
    console.log("1) soma da linha 4\n2) soma da coluna 2\n3) soma da diagonal principal\n4) soma de todos os elementos")
    console.log("Matriz: ")
    console.table(matriz);
    let contador = 1;
    resultado.forEach((somas) => {
        console.log(`${contador}) ${somas}`)
        contador++;
    })
}
const matriz = criaMatriz();
imprimeResultado(somas(matriz), matriz);