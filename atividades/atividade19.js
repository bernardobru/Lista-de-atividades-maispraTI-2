const prompt = require('prompt-sync')();
function invalidaHoraMinutoSegundo (a, b, c) {
    if (a > 23 || a < 0 || b > 59 || b < 0 || c > 59 || b < 0) {
        return true;
    } else {
        return false;
    }
}
function validaHorario () {
    let vetorHorario = [];
    let hora, minuto, segundo, horario;
    for (let i = 0; i < 5; i ++) {
        horario = prompt("Insira um horario no formato (HH.MM.SS): ");
        vetorHorario.push(horario);
    }
    vetorHorario.forEach((horarios) => {
        let horarioSeparado;
        horarioSeparado = horarios.split('.');
        hora = parseInt(horarioSeparado[0]);
        minuto = parseInt(horarioSeparado[1]);
        segundo = parseInt(horarioSeparado[2]);
        if (horarioSeparado.length > 3 || horarioSeparado.length < 3) {
            console.log(`O horário: ${horarios} está em formato inválido!`);
        } else if (invalidaHoraMinutoSegundo(hora, minuto, segundo) === true) {
            console.log(`O horário: ${horarios} está em formato inválido!`)
        } else {
            console.log(`O horário: ${horarios} está em formato valido`);
        }
    });
    return;
}
console.log(validaHorario());