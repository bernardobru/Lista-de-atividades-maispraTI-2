const prompt = require('prompt-sync')();

function precoViagem (kilometros) {
    let precoKilometros = 0;
    if (kilometros < 0) {
        return null;
    };
    if (kilometros <= 200) {
        precoKilometros = 0.5;
        return parseFloat(kilometros * precoKilometros);
    } else {
        precoKilometros = 0.45;
        return parseFloat(kilometros * precoKilometros);
    };
};  
let distancia = (parseFloat(prompt("Qual a distância do seu destino? ")));
console.log(precoViagem(distancia));