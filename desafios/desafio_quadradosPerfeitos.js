const { gets, print } = require('./funcoes_auxilixares');

const quadradosPerfeitos = [];
const entradaUsuario = gets();

for (let i = 1; i < entradaUsuario; i++) {
    
    if (verificaQuadradoPerfeito(i)) {
        quadradosPerfeitos.unshift(i);
    }
}

print(quadradosPerfeitos);

const tamanhoListaQuadrados = quadradosPerfeitos.length;
    let resultado = entradaUsuario;

    for (let i = 0; i < tamanhoListaQuadrados; i++) {

        let varAuxiliar = entradaUsuario; 
        let contAuxiliar = 0;

        for (let j = i; j < tamanhoListaQuadrados; j++) {

            while((varAuxiliar - quadradosPerfeitos[j]) >= 0) {
                varAuxiliar = varAuxiliar - quadradosPerfeitos[j];
                contAuxiliar++;
            }
        }

        if (contAuxiliar < resultado) resultado = contAuxiliar;
    }

print(resultado);


function verificaQuadradoPerfeito(valor) {
    let raizQuadrada = Math.sqrt(valor);

    return (parseInt(raizQuadrada) === raizQuadrada);
}
