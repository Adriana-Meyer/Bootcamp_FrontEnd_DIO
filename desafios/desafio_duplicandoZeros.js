const { gets, print } = require('./funcoes_auxilixares');

let entradaUsuario = parseInt(gets()); 
let arrayNumeros = new Array(entradaUsuario); 
let arrayZerosDuplicados = []; 

for (let i = 0; i < entradaUsuario; i++){ 
    arrayNumeros[i] = parseInt(gets());     
}

print(arrayNumeros);

for (let j = 0; arrayZerosDuplicados.length < entradaUsuario; j++) {
            
    let numero = arrayNumeros[j];
        
    if (numero === 0){
        arrayZerosDuplicados.push(numero);

       if (arrayZerosDuplicados.length < entradaUsuario) {
        arrayZerosDuplicados.push(numero);
        } 

    } else if (arrayZerosDuplicados.length === 0) {
        arrayZerosDuplicados.push(numero);

    } else {
        arrayZerosDuplicados.push(numero);
    }          
}

print(arrayZerosDuplicados);

