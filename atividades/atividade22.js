const prompt = require('prompt-sync')();
function pesquisaPrefeitura () {
    let vetorSalario = [], vetorFilhos = [];
    let salario, filhos, continuar;
    let mediaSal = 0, somaSal = 0;
    let mediaFilho = 0, somaFilho = 0;
    let porcentagem350, conta350 = 0;
    let maior = 0;
    console.log("PESQUISA DA PREFEITURA");
    maior = 0;
    do {
        salario = parseFloat(prompt("Salário: R$"));
        if (isNaN(salario)) {
            return "INSIRA DADOS VÁLIDOS!";
        }
        if (salario <= 350) {
            conta350 ++;
        }
        vetorSalario.push(salario);
        if (salario > maior) {
            maior = salario;
        }
        filhos = parseInt(prompt("Filhos: "));
        if (isNaN(filhos)) {
            return "INSIRA DADOS VÁLIDOS!";
        }
        vetorFilhos.push(filhos);
        continuar = prompt("Continuar inserindo dados à pesquisa?(s/n) ");
    } while (continuar === 's');

    vetorSalario.forEach((salarios) => {
        somaSal += salarios;
    });
    mediaSal = somaSal / vetorSalario.length;
    
    vetorFilhos.forEach((filho) => {
        somaFilho += filho;
    });
    mediaFilho = somaFilho / vetorFilhos.length;
    
    let totalPessoas = vetorSalario.length;
    porcentagem350 = conta350 / totalPessoas * 100;

    let resultado = { 
        mediaSalarial: mediaSal,
        mediaDeFilhos: mediaFilho,
        maiorSalario: maior,
        totalPessoasQueRecebemAte350: porcentagem350
    };
    console.log(' ');
    return `RESULTADO DA PESQUISA:\nMédia Salarial: R$${resultado.mediaSalarial.toFixed(2)}\nMédia de Filhos: ${Math.round(resultado.mediaDeFilhos)}\nMaior salário: R$${resultado.maiorSalario.toFixed(2)}\nQuantas pessoas recebem até R$350,00: ${resultado.totalPessoasQueRecebemAte350.toFixed(2)}%`;
}
console.log(pesquisaPrefeitura());