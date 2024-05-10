const prompt = require('prompt-sync')();

function radarVelocidade(velocidade){
    let limite = 80;
    if (velocidade > limite) {
        let multa = parseFloat(5.00);
        let multaTotal = parseFloat(0);
        for (limite; limite < velocidade; limite++) {
            multaTotal += multa;
        };
        return `Você foi multado em R$${multaTotal},00`;
    };
    return "Velocidade dentro da permitida";
};

let velocidadeCarro = parseFloat(prompt("Digite qual a velocidade do carro: "));
console.log(radarVelocidade(velocidadeCarro));