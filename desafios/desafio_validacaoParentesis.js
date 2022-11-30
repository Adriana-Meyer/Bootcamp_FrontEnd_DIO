const { gets, print } = require('./funcoes_auxilixares');

let entrada = gets();
print(ehValido(entrada));
    

function ehValido(palavra) {

    let primeiro = palavra[0];
    let ultimo = palavra[palavra.length-1];

    if (( primeiro === "(") && (ultimo === ")")) {
        return true;
    } else if ((primeiro === "[") && (ultimo === "]")) {
        return true;
    } else if ((primeiro === "{") && (ultimo === "}")) {
         return true;
    } else if((primeiro === " ") && (ultimo === " ")) {
        return true;
    } else {
        return false;    
    }
}
