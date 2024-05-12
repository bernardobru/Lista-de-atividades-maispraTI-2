const prompt = require('prompt-sync')();
function trocaPontos (horas) {
    let pontos = 0;
    if (horas < 0) {
        return null;
    };
    if (horas < 10) {
        pontos = horas * 2;
    } else if (horas > 10 && horas < 20) {
        pontos = horas * 5;
    } else if (horas > 20) {
        pontos = horas * 10;
    };
    let ganhos = parseFloat(pontos * 0.05);
    return `Você faturou R$${ganhos.toFixed(2)}`;
};

let horasExercicios = parseInt(prompt("Quantas horas de atividades fisicas você fez esse mês? "));
console.log(trocaPontos(horasExercicios));