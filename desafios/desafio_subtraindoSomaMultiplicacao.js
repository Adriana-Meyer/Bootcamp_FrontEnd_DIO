const { gets, print } = require('./funcoes_auxilixares');

let numero = gets();
let digitos = numero.toString().split('');
let digitosSeparados = digitos.map(Number);

let soma = 0;
let multiplicacao = 1;

for(let i = 0; i < digitosSeparados.length; i++) {

    soma = soma + digitosSeparados[i];
    multiplicacao = multiplicacao * digitosSeparados[i];
}

let resultado = (multiplicacao - soma);
print(resultado);









