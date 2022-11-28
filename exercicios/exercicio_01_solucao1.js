const precoEtiqueta = 100.00;
const formaPagamento = 'pix';

if (formaPagamento === 'debito') {
    console.log('Total da compra: ' + (precoEtiqueta - (precoEtiqueta * 0.1)));

} else if (formaPagamento === 'dinheiro' || formaPagamento === 'pix') {
    console.log('Total da compra: ' + (precoEtiqueta - (precoEtiqueta * 0.15)));

} else if (formaPagamento === 'parcela 2x') {
    console.log('Total da compra: ' + precoEtiqueta);

} else {
    console.log('Total da compra: ' + (precoEtiqueta + (precoEtiqueta * 0.1)));
}
