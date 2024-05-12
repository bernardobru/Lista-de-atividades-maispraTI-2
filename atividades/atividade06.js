const prompt = require ('prompt-sync')();
const numeroSorteado = parseInt(Math.random() * 4) + 1;
function adivinhaNumero (chute) {
    if (chute > numeroSorteado) {
        console.log("CHUTE UM NUMERO MENOR!");
    } else if (chute < numeroSorteado) {
        console.log("CHUTE UM NUMERO MAIOR!");
    }else {
        console.log("PARABÉNS! VOCÊ ACERTOU")
    };
};

let numero;
do  {
    numero = parseInt(prompt("Adivinhe um número entre 1 a 5: "));;
    adivinhaNumero(numero);
}while (numero !== numeroSorteado);