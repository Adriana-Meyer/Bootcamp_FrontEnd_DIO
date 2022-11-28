const { gets, print } = require('./funcoes_auxilixares');

var quantidadeMoedas = parseInt(gets());
const moedasPiramide = [];
let moedasRestantes = quantidadeMoedas;

for(i = 0; i < moedasRestantes; i++) {

    if((i + 1) <= moedasRestantes) {
        moedasPiramide.push(i + 1);
        moedasRestantes = moedasRestantes - moedasPiramide[i];
    }
}

let resultado = moedasPiramide.length;
print(resultado);