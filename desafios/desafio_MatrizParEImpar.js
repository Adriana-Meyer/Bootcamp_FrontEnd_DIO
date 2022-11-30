const { gets, print } = require('./funcoes_auxilixares');

let numeros = [];
let numerosOrdenados = [];

for (let i = 0; numeros.length >= 0; i++) {
    let entrada = parseInt(gets());

    if ((entrada !== 0) && (!entrada)) {
        break;
    } else {
        numeros.push(entrada);
    }
}

for (let j = 0; j < numeros.length; j++) {
    let num = numeros[j];

   if ((num % 2) == 0) {

        if (num < numerosOrdenados[0]) {
            numerosOrdenados.unshift(num);  
        } else {
            numerosOrdenados.push(num);
        } 
    }  
} 

numeros.forEach(numero => {
    if ((numero % 2) != 0) numerosOrdenados.push(numero);
});

print(numerosOrdenados);