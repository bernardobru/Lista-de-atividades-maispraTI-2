function criaMatriz1() {
    const matriz = new Array(); 
    for (let i = 0; i < 5; i++) {
        matriz[i] = new Array();
        for (let j = 0; j < 3; j++) {
            matriz[i][j] = Math.round(Math.random() * 50);
        } 
    }
    return matriz;
}
function criaMatriz2() {
    const matriz = new Array(); 
    for (let i = 0; i < 3; i++) {
        matriz[i] = new Array();
        for (let j = 0; j < 5; j++) {
            matriz[i][j] = Math.round(Math.random() * 50);
        } 
    }
    return matriz;
}
function imprimeMatriz(m1, m2, m3) {
    console.log("Matriz A: ");
    console.table(m1);
    console.log("Matriz B: ")
    console.table(m2)
    console.log("Matriz produto AB: ");
    console.table(m3);
    return;
}
function multiplicaMatriz(m1, m2) {
    let matrizProduto = new Array();
    if (m1[0].length != m2.length) {
        return "O número de colunas da primeira matriz deve ser igual ao número de colunas da segunda matriz";
    }
    for (let i = 0; i < m1.length; i++) {
        matrizProduto.push(new Array());
        //Adiciona um array ao array matrizProduto
        for (let j = 0; j < m2[0].length; j++) {
            let somaMatriz = 0;
            //Limpa a soma
            for (let k = 0; k < m1[0].length; k++) {
                somaMatriz += m1[i][k] * m2[k][j]
                //Soma o resultado da multiplicação do elemento no indice [i(colunas pelas quais serão feitas as multiplicaçoes)][k(os elementos das linhas da matriz)] da matriz A pelo elemento no indice[k(os elementos das colunas da matriz)][j(colunas pelas quais serão feitas as multiplicaçoes)]
            }
            matrizProduto[i].push(somaMatriz);
            //Adiciona a soma dos produtos dos elementos das 2 matrizes à primeira linha da matriz produto
        }
    }
    return matrizProduto;
}
imprimeMatriz(criaMatriz1(), criaMatriz2(), multiplicaMatriz(criaMatriz1(), criaMatriz2()));