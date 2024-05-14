const prompt = require('prompt-sync')();
function totalSalarioMascFemin () {    
    let continuar;    
    let pergunta;
    let sexo;    
    let salario;    
    let salarioFeminino = 0;
    let salarioMasculino = 0;
    let contador = 1;
    do {
        salario = parseFloat(prompt(`Qual o salário do ${contador}° funcionário? `));
        sexo = prompt(`Qual o sexo do ${contador}° funcionário  (m/f)?: `);
        contador ++;
        if (salario === "" || isNaN(salario)) {
            console.log("Insira valores válidos!");
        }
        if (sexo === 'f' || sexo === 'F') {
            parseFloat(salarioFeminino += salario);
        } else if (sexo === 'm' || sexo === 'M') {
            parseFloat(salarioMasculino += salario);
        } else {
            console.log("Insira valores válidos!");
        };
        pergunta = prompt("Você quer continuar inserindo dados(s/n)? ");
        if (pergunta === 's' || pergunta === 'S') {
            continuar = true;
        } else {
            continuar = false;
        };
    } while (continuar === true);
    
    return `O salário total pago aos homens é de R$${salarioMasculino.toFixed(2)} e o salário total pago às mulheres é de R$${salarioFeminino.toFixed(2)}`;
};
console.log(totalSalarioMascFemin());