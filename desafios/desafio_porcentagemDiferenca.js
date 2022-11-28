const { gets, print } = require('./funcoes_auxilixares');

let primeiroNum = parseInt(gets());
let segundoNum = parseInt(gets()); 

let diferenca = segundoNum - primeiroNum;

let porcentagem = (diferenca / primeiroNum) * 100;

print(parseInt(porcentagem) + "%");