const { gets, print } = require('./funcoes_auxilixares');

const numerosEntrada = [];

let numero = 0;
do {
    numero = parseInt(gets());
    numerosEntrada.push(numero);   
} while (numero > 0);

 print(numerosEntrada);

for (let i = 0; numerosEntrada[i] !== 0; i++) {

    let numeroRodada = numerosEntrada[i];
    let soma = 0;

    for(let count = 1; count <= 5; count++){

        if (numeroRodada % 2 == 0) {
            soma = soma + numeroRodada;
            numeroRodada = numeroRodada + 2;
            
        } else {
            soma = soma + (numeroRodada + 1);
            numeroRodada = numeroRodada + 3;
        }
    }

    print(soma);   
} 

     
   
