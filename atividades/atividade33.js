function criaMatriz() {
    const linhas = 3;
    const colunas = 3;
    let matriz = new Array();
    for (let i = 0; i < linhas; i++) {
        matriz[i] = new Array;
        for (let j = 0; j < colunas; j++) {
            matriz[i][j] = Math.round(Math.random() * 10);
        }
    }
    return matriz;
}
function 
