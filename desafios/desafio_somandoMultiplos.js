const { gets, print } = require('./funcoes_auxilixares');

var numero = parseInt(gets());
var limite = parseInt(gets());

let resultado = 0;

for(i = numero; i <= limite; i++) {
    if(i % numero == 0) {
        resultado = resultado + i;
    }
}

print(resultado);