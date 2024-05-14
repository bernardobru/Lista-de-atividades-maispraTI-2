function sequenciaFibonacci () {
    let vetorFibonacci = [];
    let termoN = 0;
    for (let contador = 0; contador < 2; contador++) {
        vetorFibonacci.push(1);
    };
    for (let i = 0; i < 15 - 2; i++ ) {
        termoN = vetorFibonacci[i] + vetorFibonacci[i + 1];
        vetorFibonacci.push(termoN);
    };
    return `Os 15 primeiros elementos da sequência de Fibonacci:\n${vetorFibonacci}`;
};
console.log(sequenciaFibonacci());