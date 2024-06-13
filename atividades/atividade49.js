const Transacao = function (id, valor, data, categoria) {
    this.id = id;
    this.valor = parseFloat(valor);
    this.data = data;
    this.categoria = categoria;
}
const transacao01 = new Transacao('0387', 500, '10/09/23', 'servicos');
const transacao02 = new Transacao('2152', 2824, '05/10/23', 'salario');
const transacao03 = new Transacao('4575', 2824, '05/11/23', 'salario');
const transacao04 = new Transacao('6654', 2824, '05/12/23', 'salario');
const transacao05 = new Transacao('3351', 2.75, '31/01/24', 'compras');
const transacao06 = new Transacao('3352', 7.50, '31/01/24', 'compras');
const transacao07 = new Transacao('3353', 5, '31/01/24', 'compras');
const transacao08 = new Transacao('7892', 312.5, '14/04/24', 'servicos');
const transacao09 = new Transacao('0148', 1500, '05/05/24', 'servicos');
const transacoes = [transacao01, transacao02, transacao03, transacao04, transacao05, transacao06, transacao07, transacao08, transacao09];
function categoriaTransacao(array) {
    const objeto = {};
    array.forEach(({valor, categoria}) => {
        if (objeto[categoria]) {
            objeto[categoria] = [...objeto[categoria], valor]
            objeto[`Subtotal de ${categoria}: `] += valor;
          } else {
            objeto[categoria] = [valor]
            objeto[`Subtotal de ${categoria}: `] = valor;
          }       
    });
    return objeto;
}
function imprimeObjeto(objeto) {
    for (let propriedades in objeto) {
        console.log(`${propriedades}:`, objeto[propriedades]);
    }
    return;
}
imprimeObjeto(categoriaTransacao(transacoes));