const prompt = require('prompt-sync')();
let erro = () => {console.log('ERRO!')}
function aluguelCarro (carro, dias, kilometros) {
    let precoDias = 0;
    let precoKilometros = 0;
    if (dias < 0 && kilometros < 0){
        return erro();
    };
    if (carro === 'popular') {
        precoDias = dias * 90;
        if (kilometros < 100) {
            precoKilometros = parseFloat(kilometros * (20/100));
        }else {
            precoKilometros = parseFloat(kilometros * (10/100));
        };
    };
    if (carro === 'luxo') {
        precoDias = dias * 150;
        if (kilometros < 200) {
            precoKilometros = kilometros * 0.30;
        } else {
            precoKilometros = kilometros * 0.25;
        };
    };
    let precoTotal =parseFloat(precoDias + precoKilometros);
    
    return precoTotal.toFixed(2);
};
console.log("SISTEMA DE PAGAMENTO DE ALUGUEL");
let tipoCarro = prompt("Qual carro você alugou(popular ou luxo)? ");
let qtdDias = parseInt(prompt("Quantos dias você ficou com o carro? "));
let kmRodados = parseFloat(prompt("Quantos kilômetros você andou com o carro?"));
console.log(`TOTAL A PAGAR: R$${aluguelCarro(tipoCarro, qtdDias, kmRodados)}`);