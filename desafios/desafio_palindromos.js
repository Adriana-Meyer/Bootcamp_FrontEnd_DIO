const { gets, print } = require('./funcoes_auxilixares');

let palavra = gets();
print(checaPalindromo(palavra));


function checaPalindromo(palavra) {
    let palavraInvertida = "";

    for (let i = palavra.length - 1; i >= 0; i--){
           palavraInvertida = palavraInvertida + palavra[i];
        }

    if (palavra === palavraInvertida){
        return 'TRUE'
    } else {
        return 'FALSE'
    }              
}

       

