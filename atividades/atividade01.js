const prompt = require('prompt-sync')();

function tempoDeVidaPerdido(cigarros, anos) {
    const minutosDia = 24 * 60;
    const minutosPerdido = 10;
    let cigarrosPorAno = cigarros * 365;
    let minutosPorAno = minutosPerdido * cigarrosPorAno;
    let diasPerdidosPorAno = minutosPorAno / minutosDia;
    let diasPerdidosTotal = Math.floor(diasPerdidosPorAno * anos)
    return `Você perdeu ${diasPerdidosTotal} dias de vida`;
};
let cigarrosPorDia = prompt("Quantos cigarros você fuma por dia? ");
let anosFumando = prompt("A quantos anos você fuma? ");
console.log(tempoDeVidaPerdido(cigarrosPorDia, anosFumando));