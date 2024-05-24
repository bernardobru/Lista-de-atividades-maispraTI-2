const prompt = require('prompt-sync')();
function pesoIdeal (altura, sexo) {
    let peso;
    let invalido = 'Insira dados válidos!';
    if (isNaN(altura)) {
        return invalido
    }
    if (sexo === 'm' || sexo === 'M') {
        peso = 72.7 * altura - 58;
        return `Seu peso ideal é de: ${peso.toFixed(2)}`;
    } else if (sexo === 'f' || sexo === 'F') {
        peso = 62.1 * altura - 44.7;
        return `Seu peso ideal é de: ${peso.toFixed(2)}`;
    } else {
        return invalido;
    }
}
let informeAltura = parseFloat(prompt("Altura(em metros): "));
let informeSexo = prompt("Sexo: ");
console.log(pesoIdeal(informeAltura, informeSexo));