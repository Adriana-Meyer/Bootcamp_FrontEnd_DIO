class Carro {
    marca;
    cor;
    KmPorLitro;

    constructor(marca, cor, KmPorLitro){
        this.marca = marca;
        this.cor = cor;
        this.KmPorLitro = 1 / KmPorLitro;
    }
    
    calcularGasto(kmDistancia, precoCombustivel){
        return (kmDistancia * this.KmPorLitro) * precoCombustivel;
    }

}

const fusca = new Carro('volks', 'azul', 15);
const uno = new Carro('fiat', 'prata', 12);

console.log(fusca.calcularGasto(73, 5).toFixed(2) + ' reais');   
console.log(uno.calcularGasto(70, 5).toFixed(2) + ' reais');   