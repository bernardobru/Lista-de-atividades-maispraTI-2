const prompt = require('prompt-sync')();
function listaMenorDe18 () {
    let nome;
    let idade;
    let menores = [];
    let vetorNome = [];
    let vetorIdade = [];
    for (let i = 0; i < 9; i ++) {
        nome = prompt("Digite o nome: ");
        idade = parseInt(prompt("Digite a idade: "));
        if (isNaN(idade)) {
            console.log("Insira um dado válido!")
        }
        vetorNome.push(nome);
        vetorIdade.push(idade);
        
        if (vetorIdade[i] < 18) {
            menores.push({nome: vetorNome[i], idade: vetorIdade[i] });
        }
    }    
    console.log("MENORES DE IDADE: ")
    menores.forEach((menor) => {console.log(`Nome: ${menor.nome}\nIdade: ${menor.idade}`)});
    return;
}
console.log(listaMenorDe18());