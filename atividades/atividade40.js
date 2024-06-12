const loteria = new Array(47, 49, 57, 64, 69);
function criaAposta(apostas) {
    let vetorDeApostas = new Array();
    for (let i = 0; i < apostas; i++) {
        vetorDeApostas[i] = new Array();
        for (let j = 0; j < loteria.length; j++) {
            vetorDeApostas[i][j] = Math.round(Math.random() * 98) + 1;
        }
    }
    return vetorDeApostas;
}
function ganhadorDaAposta(vetorAposta) {
    let acertos = 0;
    let acertoLot = 0;
    let j = 0;
    for (let apostas of vetorAposta) {
        for (let i = 0; i < apostas.length; i++) { 
            if (apostas[i] === loteria[i]) {
                acertos++;
            }
        }    
        acertoLot = acertos;
        acertos = 0;
        j++;
        if (acertoLot === loteria.length) {
            console.log(`Ganhador: Aposta ${j}`);
            break;
        } 
    }
    if (acertoLot !== loteria.length) {
        console.log("Não há vencedores");
    }
    return;
}
const aposta = criaAposta(50)
ganhadorDaAposta(aposta);