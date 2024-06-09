function criaImprimeMatriz () {
    let matriz = [];
    for (let i = 0; i < 15; i ++) {
        matriz[i] = [];
        for (let j = 0; j < 20; j ++) {
           matriz[i][j] = parseFloat((Math.random() * 99).toFixed(2)); 
        }
    }
    console.table(matriz); 
    return matriz;
}
function somaColunasMatriz (a) {
    let somaColunas = [];
    for (let i = 0; i < 20; i++) {
        let soma = 0;
        for (let j = 0; j < 15; j++) {
            soma += a[j][i];
        }
        somaColunas.push(soma);
    }
    let c = 0
    for (let somas of somaColunas) {
        console.log(`Soma da coluna ${c+1}: ${somas.toFixed(2)}`);
        c++;
    }
    return '';
}
console.log(somaColunasMatriz(criaImprimeMatriz()));