const prompt = require('prompt-sync')();

function precoViagem (kilometros) {
    let precoKilometros = 0;
    if (kilometros < 0) {
        return "Insira um valor válido!";
    };
    if (kilometros <= 200) {
        precoKilometros = 0.5;
        let preco = kilometros * precoKilometros
        return `Preço total da viagem = R$${preco.toFixed(2)}`;
    } else {
        precoKilometros = 0.45;
        let preco = kilometros * precoKilometros
        return `Preço total da viagem = R$${preco.toFixed(2)}`;
    };
};  
let distancia = (parseFloat(prompt("Qual a distância do seu destino? ")));
console.log(precoViagem(distancia));