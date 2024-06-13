const vendedores = [{vendedor: 'Augusto', vendas:3500}, {vendedor: 'Boris', vendas:2998.99}, {vendedor: 'Caio', vendas:5555.55}, {vendedor: 'Dario', vendas:4850}, {vendedor: 'Ezequiel', vendas:3120}, {vendedor: 'Flavio', vendas:4599.98}, {vendedor: 'Gregorio', vendas: 2943.95}, {vendedor: 'Hugo', vendas:4210}, {vendedor: 'Ivo', vendas:3333.33}];
function sumarizaVetor (array) {
    const objeto = {};
    array.forEach(({vendedor, vendas}) => {
        objeto[vendedor] = vendas;
    });
    return objeto;
} 
function imprimeObjeto(objeto) {
    for (let propriedades in objeto) {
        console.log(`${propriedades}: ${objeto[propriedades]}`)
    }
}
const objeto = sumarizaVetor(vendedores);
imprimeObjeto(objeto);