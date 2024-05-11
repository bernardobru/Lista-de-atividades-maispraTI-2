const prompt = require('prompt-sync')();

function tempoDeVidaPerdido(cigarros, anos) {
    const minutosDia = 24 * 60;
    const minutosPerdido = 10;
    let cigarrosPorAno = cigarros * 365;
    let minutosPorAno = minutosPerdido * cigarrosPorAno;
    let diasPerdidosPorAno = minutosPorAno / minutosDia;
    let diasPerdidos = diasPerdidosPorAno * anos;
    return parseInt(diasPerdidos);
};

console.log("VEJA QUANTOS ANOS DE VIDA UM FUMANTE PERDE");

let cigarrosPorDia = prompt("Quantos cigarros você fuma por dia? ");
let anosFumando = prompt("A quantos anos você fuma? ");

let resposta = tempoDeVidaPerdido(cigarrosPorDia, anosFumando);
console.log(resposta);
