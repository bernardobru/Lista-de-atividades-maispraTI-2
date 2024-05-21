const prompt = require('prompt-sync')();
function imprimeFolha (empresa) {
    for (empregados of empresa) {
        console.log("==========================================")
        console.log(`|Folha de pagamento de ${empregados.Nome}|`)
        console.log("==========================================")
        console.log(`Matrícula: N°${empregados.Matricula}`);
        console.log(`Nome: ${empregados.Nome}`);
        console.log(`Salário Bruto: R$${empregados.SalarioBruto}`);
        console.log(`Dedução do INSS(12%): R$${empregados.DeducaoINSS}`);
        console.log(`Salário Líquido: R$${empregados.SalarioLiquido}`);
    }
    return;
}
function folhaDePagamento () {
    let vetorFuncionarios = [];
    let deducao = parseFloat(0.12);
    let desconto;
    let salarioLiquido;
    for (let i = 0; i < 80; i ++) {
        let funcionario = {
            Matricula: prompt(`Matrícula do ${i + 1}° funcionário: `),
            Nome: prompt(`Nome do ${i + 1}° funcionário: `),
            SalarioBruto: parseFloat(prompt(`Salário Bruto do ${i + 1}° funcionário: `))
        };
        if (isNaN(funcionario.SalarioBruto)) {
            console.log("INSIRA UM VALOR VÁLIDO!");
        }
        desconto = parseFloat(funcionario.SalarioBruto * deducao);
        salarioLiquido = funcionario.SalarioBruto - desconto;
        funcionario.DeducaoINSS = desconto;
        funcionario.SalarioLiquido = salarioLiquido;
        vetorFuncionarios.push(funcionario);
    }
    return imprimeFolha(vetorFuncionarios);
}
console.log(folhaDePagamento());