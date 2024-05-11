const prompt = require('prompt-sync')();

function verificaTriangulo (...segmentos) {
    if (segmentos[1] + segmentos[2] > segmentos[0] && segmentos[0] + segmentos[1] > segmentos[2] && segmentos[0] + segmentos[2] > segmentos[1]) {
        return "Esses segmentos de reta formam um triângulo";
    }else {
        return "Esses segmentos de reta não formam um triângulo";
    };
};

let retas = Array(3);
for (let i = 0; i < retas.length; i++) { 
    retas[i] = parseInt(prompt("Digite o valor do " + (i + 1) + "° segmento: ")); 
}
console.log(verificaTriangulo(...retas));