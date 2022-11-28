const { gets, print } = require('./funcoes_auxilixares');

const palavra = gets(); 

let resultado = ''; 

	for (let i = 0; i < palavra.length; i++) { 

		const letra = palavra[i];       

        if(!(resultado.includes(letra))) {
            resultado += letra;
        }
    }

	print(resultado);


