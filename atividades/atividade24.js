const prompt = require('prompt-sync')();
function criaImprimeMatriz () {
    let matriz = [];
    for (let i = 0; i < 6; i ++) {
        matriz[i] = [];
        for (let j = 0; j < 8; j ++) {
           matriz[i][j] = Math.floor(Math.random() * 10 - 5); 
        }
    }
    for (let x = 0; x < 6; x ++) {
        let linha = '';
        for (let y = 0; y < 8; y ++) {
            linha += matriz[x][y] + ' ';
        }
        console.log(linha);
        }
        return matriz;
}
function mostraNegativo (a) {
    let C = [];
    for (let i = 0; i < 6; i ++) {
        let contaNegativo = 0;
        for (let j = 0; j < 8; j ++) {
            if (a[i][j] < 0) {
                contaNegativo++;
            }
        }
        C.push(contaNegativo);
    }
    return `A quantidade de elementos negativos em cada linha da matriz é de:\n${C[0]} na primeira linha\n${C[1]} na segunda linha\n${C[2]} na terceira linha\n${C[3]} na quarta linha\n${C[4]} na quinta linha\n${C[5]} na sexta linha`;
}
//console.log(imprimeMatriz(criaMatriz));
console.log(mostraNegativo(criaImprimeMatriz()));