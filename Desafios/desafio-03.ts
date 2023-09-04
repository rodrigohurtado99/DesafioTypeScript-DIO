console.log('==== Desafio-03 ====')
console.log('Desafio no browser')
let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLSpanElement;

let pegaCampo = campoSaldo.innerHTML = '0';
let converteCampo = Number(pegaCampo);

function somarAoSaldo(soma:number) {
    let somaValores = converteCampo += soma
    let armazenaResultado = somaValores
    campoSaldo.innerHTML = armazenaResultado.toString();
}


function limparSaldo() {
    converteCampo = 0
    campoSaldo.innerHTML = converteCampo.toString()
    
}

botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});