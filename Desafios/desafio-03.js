"use strict";
console.log('==== Desafio-03 ====');
console.log('Desafio no browser');
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
let pegaCampo = campoSaldo.innerHTML = '0';
let converteCampo = Number(pegaCampo);
function somarAoSaldo(soma) {
    let somaValores = converteCampo += soma;
    let armazenaResultado = somaValores;
    campoSaldo.innerHTML = armazenaResultado.toString();
}
function limparSaldo() {
    converteCampo = 0;
    campoSaldo.innerHTML = converteCampo.toString();
}
botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});
botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
