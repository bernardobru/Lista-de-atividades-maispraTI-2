function sequenciaFibonacci () {
    let termo1 = 1;
    let termo2 = 1;
    let termoN = 0;
    console.log(termo1);
    console.log(termo2);    
    for (let i = 2; i < 10; i++) {
        termoN = termo1 + termo2; 
        console.log(termoN)
        termo1 = termo2;
        termo2 = termoN;
    };
    return "10 primeiros termos da sequência de Fibonacci";
};
console.log(sequenciaFibonacci());