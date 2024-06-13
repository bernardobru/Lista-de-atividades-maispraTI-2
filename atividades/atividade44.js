const computador = {
    marca: 'Samsung',
    tipo: 'Laptop',
    OS: 'Ubuntu',
    lancamento: 2019,
    modelo: 3425,
    ligar: function () {console.log("Ligando...")},
    desligar: function () {console.log("Desligando...")}
}
function contaString(objeto) {
    let contadorString = 0;
    for (let propriedade in objeto) {
        if (typeof objeto[propriedade] === 'string') {
            contadorString++;
        }
    }
    return `Este objeto possui ${contadorString} propriedades do tipo String`;
}
console.log(contaString(computador));    