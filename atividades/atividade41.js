function objetoPessoa() {
    const pessoa = {
    nome: 'João',
    idade: 32
    }
    pessoa.email = 'joao@email.com';
    console.log(`Idade de ${pessoa.nome}: ${pessoa.idade}`);
    console.log(`Nova propriedade do objeto pessoa: ${pessoa.email}`);
}
objetoPessoa();