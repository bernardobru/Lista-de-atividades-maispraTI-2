const pessoa01 = {
    nome: 'José',
    idade: 23,
    peso: 70,
    falar: function () {console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`)},
}
const pessoa02 = {
    nome: 'mario',
    idade: 56,
    profissao: 'programador',
    trabalhar:  function() {console.log("Codando...")}
}

function mesclaObjeto(obj1, obj2) {
    return {...obj1, ...obj2};
}
const objeto03 = mesclaObjeto(pessoa01, pessoa02);
console.log("Objeto resultante da pessoa01 e da pessoa02: ")
for (let propriedade in objeto03) {
    console.log(`${propriedade}: ${objeto03[propriedade]}`);
}
