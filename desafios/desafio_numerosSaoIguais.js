const { gets, print } = require('./funcoes_auxilixares');

let primeiroNum = gets();
let segundoNum = gets();

if (primeiroNum === segundoNum){
    print("Sao iguais!");
} else {
    print("Nao sao iguais!");
}
