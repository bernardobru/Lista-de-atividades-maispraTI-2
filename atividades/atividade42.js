const dados = {
    array01: [1,2,3,4,5],
    array02: [5,4,3,2,1],
    array03: [3,2,5,1,6],
    array04: [7,5,3,8,1],
    array05: [5,3,1,3,4],
    array06: [9,7,5,8,1],
    string01: "String 01",
    string02: "String 01",
    numero01: 1,
    numero02: 2,
    length: 6
}
function retornaArrayDeObjeto(objeto) {
    const novoObjeto = {};
    for (let propriedade in objeto) {
        if (typeof objeto[propriedade] === 'object') {
            novoObjeto.array = objeto[propriedade];
            console.log("Propriedade array do objeto dados: " + '[' + novoObjeto.array + ']');
        }   
    }
    return;
}
console.log('Objeto dados: ');
for (let propriedade in dados) {
    console.log(dados[propriedade]);
}
console.log('\n')
retornaArrayDeObjeto(dados);