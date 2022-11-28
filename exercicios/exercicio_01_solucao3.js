const precoEtiqueta = 100.00;
const debito = precoEtiqueta - ((precoEtiqueta * 10) / 100);
const dinheiroOuPix = precoEtiqueta - ((precoEtiqueta * 15) / 100);
const parcela2x = precoEtiqueta;
const parcelaMais2x = precoEtiqueta + ((precoEtiqueta * 10) / 100);

const formaPagamento = parcelaMais2x;

if (formaPagamento === debito) {
    console.log('Total da compra: ' + debito);
} else if (formaPagamento === dinheiroOuPix) {
    console.log('Total da compra: ' + dinheiroOuPix);
} else if (formaPagamento === parcela2x) {
    console.log('Total da compra: ' + parcela2x);
} else {
    console.log('Total da compra: ' + parcelaMais2x);
}
