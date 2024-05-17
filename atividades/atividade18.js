const prompt = require('prompt-sync')();
function registraFuncionario () {
    let registro = {
        Nome: prompt("Digite o nome do funcionário: "),
        Cargo: prompt("Digite o cargo do funcionário: "), 
        Salario: parseFloat(prompt("Digite o salário do funcionário: "))
    };
    for (elementos in registro) {
        console.log(elementos, ': ', registro[elementos]);
    }
    return;
}
console.log(registraFuncionario());