const { gets, print } = require('./funcoes_auxilixares');

let numero = gets();
let temp = 0;
let resultado = 0;

const listaNumeros = [];

while (numero >= 3) {
    temp = parseInt(numero * (numero - 1) / (numero - 2));
    numero -= 3;

    if (listaNumeros.length === 0) {
        listaNumeros.push(temp);
    } else {
        listaNumeros.push(temp*(-1));
    }

    listaNumeros.push(numero);
    numero--;
}

if (numero == 2){
    temp = numero * (numero - 1);
    listaNumeros.push(temp*(-1));

}else if (numero == 1) {
    listaNumeros.push(numero*(-1));
}

listaNumeros.forEach( n => {
    resultado += n;
}); 
    
print(listaNumeros);
print(resultado);