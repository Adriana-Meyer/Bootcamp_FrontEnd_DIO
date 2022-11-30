const { gets, print } = require('./funcoes_auxilixares');

const num = parseInt(gets());

let resultado = somatorio(num);
print(resultado);

//Método que calcula o somatório de um número usando recursividade.
function somatorio(numero) {
    if (numero == 0) {
        return 0;
    } else {
        return numero + somatorio(numero - 1);
    }
}