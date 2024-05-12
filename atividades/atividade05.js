console.log("JOKENPÔ");

const prompt = require('prompt-sync')();
const pedra = 0;
const papel = 1;
const tesoura = 2;
const nome = prompt("Qual o seu nome? ");
const vitoria1 = `${nome} venceu!`;
const vitoria2 = "Jogador 2 venceu!";
const empate = 'Empate!';

let jogada = parseInt(prompt("Qual a sua jogada?(0=pedra, 1=papel, 2=tesoura, 3=para o jogo)"));
const jogadorUsuario = function () {
    switch(jogada){
        case 0:
            jogada = pedra;
            return jogada;
        case 1:
            jogada = papel;
            return jogada;
        case 2:
            jogada = tesoura;
            return jogada;
        default:
            return null;
        };
};
const jogadorMaquina = function () {
    let jogada = Math.floor(Math.random() * 3);
    if (jogada === pedra) {
        return jogada;
    }else if (jogada === papel) {
        return jogada;
    }else {
        return jogada;
    };
};
function joKenPo (jogadaPlayer1, jogadaPlayer2) {
    if (jogadaPlayer1 === pedra && jogadaPlayer2 === tesoura) {
        return vitoria1;
    }else if (jogadaPlayer2 === pedra && jogadaPlayer1 === tesoura) {
        return vitoria2;
    }else if (jogadaPlayer1 === papel && jogadaPlayer2 === pedra) {
        return vitoria1;
    }else if (jogadaPlayer2 === papel && jogadaPlayer1 === tesoura) {
        return vitoria2;
    }else if (jogadaPlayer1 === tesoura && jogadaPlayer2 === papel) {
        return vitoria1;
    }else if (jogadaPlayer2 === tesoura && jogadaPlayer1 === papel) {
        return vitoria2;
    }else if (jogadaPlayer1 === jogadaPlayer2) {
        return empate;
    }else {
        return "JOGADA INVÀLIDA!"; 
    };
};
while (jogada !== 3) {
    console.log(joKenPo(jogadorUsuario(), jogadorMaquina()));
    jogada = parseInt(prompt("Qual a sua jogada?(0=pedra, 1=papel, 2=tesoura, 3=para o jogo)"));
};