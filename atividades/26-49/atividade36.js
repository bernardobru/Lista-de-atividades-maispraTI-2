function criaVetor(tamanho) {
    let vetor = new Array();
    for (let i = 0; i < tamanho; i++) {
        vetor[i] = Math.round(Math.random() * 10) + 1;
    }
    return vetor;
}
function geraNumeroCartao() {
    return Math.round(Math.random() * 100) + 1;
}
const gabarito = criaVetor(13);
const Apostador = function (cartao, respostas) {
    this.NumeroCartao = cartao;
    this.CartaoResposta = respostas;
}
function apostadores100() {
    const apostadores = new Array(); 
    for (let i = 0; i < 99; i++) {
        let jogador = new Apostador(geraNumeroCartao(), criaVetor(13));
        apostadores.push(jogador);
    }
    return apostadores;
}
function verificaAcertos(jogadores) {
    let acertos = 0;
    let acerto = 0;
    for (let jogador of jogadores){
        acertos = 0;
        console.log(`Número do apostador: ${jogador.NumeroCartao}`);
        for (let i = 0; i < jogador.CartaoResposta.length; i++) {
            if (jogador.CartaoResposta[i] == gabarito[i]) {
                acertos++;
            } 
        }
        if (acertos > 0) {
            console.log(`Número de acertos: ${acertos}`);
            console.log("\n");
        } else {
            console.log(`Número de acertos: ${acertos}`);
            console.log("\n");              
        }
        if (acertos == gabarito.length) {
            acerto = jogador.NumeroCartao;
        }
    }
    if (acertos == gabarito.length) {
        return `Parabéns, o jogador ${acerto} foi o GANHADOR!`;
    } else {
        return "Não teve ganhador";
    }
}
const apostadores = apostadores100();
console.log(verificaAcertos(apostadores));