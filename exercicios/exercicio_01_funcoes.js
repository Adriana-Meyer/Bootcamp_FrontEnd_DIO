function calculaDesconto(precoEtiqueta, percentualDesconto){
    return precoEtiqueta - (precoEtiqueta * (percentualDesconto / 100));
}

function calculaJuros(precoEtiqueta, percentualJuros){
    return precoEtiqueta + (precoEtiqueta * (percentualJuros / 100));
}

function calculaPrecoFinal (formaPagamento, precoEtiqueta){
    if (formaPagamento === 1){
        return 'Pagamento no débito: R$' + calculaDesconto(precoEtiqueta, 10);
    } else if (formaPagamento === 2){
        return 'Pagamento no dinheiro ou pix: R$' + calculaDesconto(precoEtiqueta, 15);
    } else if (formaPagamento === 3){
        return 'Pagamento parcelado 2x: R$' +  calculaDesconto(precoEtiqueta, 0);
    } else {
        return 'Pagamento parcelado 3x ou mais: R$' + calculaJuros(precoEtiqueta, 10);
    }

}

console.log(calculaPrecoFinal(2, 100));


/*SOLUÇÃO ALTERNATIVA

function calculaPrecoFinal(formaPagamento, precoEtiqueta){

    if (formaPagamento === 'debito') {
        return 'Total da compra: ' + (precoEtiqueta - (precoEtiqueta * 0.10));

    } else if (formaPagamento === 'dinheiro' || formaPagamento === 'pix') {
        return 'Total da compra: ' + (precoEtiqueta - (precoEtiqueta * 0.15));

    } else if (formaPagamento === 'parcela 2x') {
        return 'Total da compra: ' + precoEtiqueta;

    } else {
        return 'Total da compra: ' + (precoEtiqueta + (precoEtiqueta * 0.1));
    }

}

console.log(calculaPrecoFinal ('parcela 2x', 100));

*/