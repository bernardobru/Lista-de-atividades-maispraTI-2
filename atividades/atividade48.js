const inventarioLojaA = {
    canetas: 100,
    cartuchosImpressora: 13,
    postIts: 5,
    grampos: 50,
    fitasAdesivas: 16,
    clips: 200
}
const inventarioLojaB = {
    canetas: 98,
    corretivo: 69,
    lapis: 54,
    borracha: 30,
    grampos: 43,
    pastas: 10
}

function combinaEstoque(obj1, obj2) {
    let obj3 = {...obj1};
    for (let propriedades in obj2) {
        if (obj3[propriedades]) {
            obj3[propriedades] += obj2[propriedades];
        } else {
            obj3[propriedades] = obj2[propriedades];
        }
    }
    return obj3;
}
function imprimeObjeto(objeto) {
    for (let propriedades in objeto) {
        console.log(`${propriedades}: ${objeto[propriedades]}`);
    }
    return;
}
console.log("Inventário da loja A");
imprimeObjeto(inventarioLojaA);
console.log('\n');
console.log("Inventário da loja B");
imprimeObjeto(inventarioLojaB);
console.log('\n');
console.log("Inventário único das duas lojas")
imprimeObjeto(combinaEstoque(inventarioLojaA, inventarioLojaB));