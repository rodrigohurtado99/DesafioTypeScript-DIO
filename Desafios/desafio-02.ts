console.log('==== Desafio-02 ====')

interface Pessoa {
    nome:string;
    idade: number;
    profissao: 'Atriz' | 'Padeiro'
}

let pessoa1: Pessoa = {
    nome: "Maria",
    idade: 29,
    profissao: 'Atriz'
}

let pessoa2: Pessoa = {
    nome: "Roberto",
    idade: 19,
    profissao: "Padeiro"
}

let pessoa3: Pessoa = {
    nome: "laura",
    idade: 32,
    profissao: "Atriz"
}

let pessoa4: Pessoa = {
    nome: "carlos",
    idade: 19,
    profissao: "Padeiro"
}
console.log(pessoa1, pessoa2, pessoa3, pessoa4)