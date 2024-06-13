const strings = ['joao', 'maria', 'jose', 'pedro', 'jonathan', 'jose', 'jose', 'joao', 'pedro', 'antonio', 'antonio', 'maria', 'jaques'];
function criaObjetoDeVetor(array) {
    const novoObjeto = {};
    array.forEach((string) => {
        if (novoObjeto[string]) {//Se a a próxima string estiver presente no array, será adicionado mais um em seu valor
            novoObjeto[string]++;
        } else {
            novoObjeto[string] = 1;//Caso o objeto não tenha a string, é criada a propriedade com o valor 1
        }
    });
    return novoObjeto
}
function imprimeObjeto(objeto) {
    for (let propriedade in objeto) {
        console.log(`${propriedade}: ${objeto[propriedade]}`);
    }
}
console.log(`Array de strings:\n${strings}`)
console.log("Objeto com os valores do array sendo chaves e as vezes que se repetem são os valores:")
imprimeObjeto(criaObjetoDeVetor(strings));