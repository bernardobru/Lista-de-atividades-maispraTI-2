function criaVetorResposta() {
    let vetor = new Array();
    let alternativas = new Array('v', 'f');
    for (let i = 0; i < 20; i++) {
        vetor.push(alternativas[Math.floor(Math.random()* 2)]);
    }
    return vetor;
}
const gabarito = criaVetorResposta();
const Aluno = function (aluno, resposta) {
    this.Aluno = aluno;
    this.Respostas = resposta;
} 
function turmaAlunos() {
    const alunos = new Array();
    for (let i = 0; i < 50; i++) {
        let aluno = new Aluno(i + 1, criaVetorResposta());
        alunos.push(aluno);
    }
    return alunos;
} 
function aprovaReprova(turma) {
    let acertos = 0;
    for (let aluno of turma) {
        acertos = 0;
        console.log(`Aluno ${aluno.Aluno}: `);
        for (let i = 0; i < aluno.Respostas.length; i++) {
            if (aluno.Respostas[i] == gabarito[i]) {
                acertos++;
            }
        }
        if (acertos > 0) {
            console.log(`Acertos: ${acertos}`);
        } else {
            console.log(`Acertos: ${acertos}`);
        }
        if (acertos >= 12) {
            console.log("APROVADO");
            console.log("\n");
        } else {
            console.log("REPROVADO");
            console.log("\n");
        }
        acertos = 0; 
    }
}
console.log(gabarito);
aprovaReprova(turmaAlunos());