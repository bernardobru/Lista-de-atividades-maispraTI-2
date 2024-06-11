function criaMatriz() {
    const linhas = 12;
    const colunas = 13;
    let matriz = new Array();
    for (let i = 0; i < linhas; i++) {
        matriz[i] = new Array;
        for (let j = 0; j < colunas; j++) {
            matriz[i][j] = Math.round(Math.random() * 50);
        }
    }
    return matriz;
}
function maiorElementoLinha(matriz, i) {//Recebe a linha a ser dividida e a matriz que vai ser lida
    let maior = matriz[i][0];//O maior elemento é o elemento [0,0] da matriz
    for (let j = 0; j < matriz[0].length; j++) {
        if (matriz[i][j] > maior){//Faz a verificação do maior
            maior = matriz[i][j];
        }
    }
    return maior;//Retorna o maior elemento da linha
}
function dividirElementos(matriz, i, maior) {//Recebe a matriz a ser lida, o numero da linha e o maior elemento da linha
    let linha = [];//O array que receberá os valores dividos da linha
    for (let j = 0; j < matriz[0].length; j++) {
        linha.push(Number((matriz[i][j] / maior).toFixed(2)));////Adiciona ao array o valor dividido
    }
    return linha;//Retorna o array
}
function matrizModificada(matriz) {
    let matrizModificada = new Array();//A matriz que receberá os valores modificados
    for (let i = 0; i < matriz.length; i++) {
        let maior = maiorElementoLinha(matriz, i);//Define o maior elemento da linha
        matrizModificada[i] = dividirElementos(matriz, i, maior);//Define os elementos da matriz sendo o array retornado da função de dividir
    }
    return matrizModificada;//Retorna a matriz
}
const matriz = criaMatriz();
const matrizDividida = matrizModificada(matriz);
console.table(matriz);
console.table(matrizDividida);