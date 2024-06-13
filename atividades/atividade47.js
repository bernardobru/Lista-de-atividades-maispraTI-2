const idades = {
    jose: 18,
    anderson: 32,
    claudio: 45,
    josnei: 59,
    pedro: 12
}
function funcao(valor) {
    return valor + 10;
}
function alteraObjeto(objeto) {
    const novoObjeto = {}
    for (let valores in objeto) {
        novoObjeto[valores]= funcao(objeto[valores]);
    }
    return novoObjeto;
}
function imprimeObjeto(objeto) {
    for (let propriedades in objeto) {
        console.log(`Idade de ${propriedades}: ${objeto[propriedades]}`);
    }
    return;
}
function imprimeObjetoModificado(objeto) {
    for (let propriedades in objeto) {
        console.log(`Idade de ${propriedades} daqui a 10 anos: ${objeto[propriedades]}`);
    }
    return;
}
const objeto = alteraObjeto(idades);
imprimeObjeto(idades);
console.log('\n')
imprimeObjetoModificado(objeto);