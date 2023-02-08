onmessage = function (evento) {
    let soma = evento.data[0] + evento.data[1];
    console.log('A soma de ' + evento.data[0] + '+' + evento.data[1] + 'é');
    this.postMessage(soma);
}
