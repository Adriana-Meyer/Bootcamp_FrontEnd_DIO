const { gets, print } = require('./funcoes_auxilixares');

let temNum = false;
let elementos = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75]; 

let num = parseInt(gets());
buscaSequencial(num);
        
function buscaSequencial (num) {
    for(let i = 0 ; i < elementos.length; i++) {
        if(num === elementos[i]) {
            print("Achei " + num + " na posicao " + i);
            temNum = true;
            break;
        }
    }

    if(!temNum) {
        print("Numero " + num + " nao encontrado!");
    }
}