const { gets, print } = require('./funcoes_auxilixares');

let arrayEntradas = gets().split(''); 
let arrayOrdenado = [];


arrayEntradas.forEach(num => (num % 2 == 0) ? arrayOrdenado.unshift(num) : arrayOrdenado.push(num));
print(arrayOrdenado);