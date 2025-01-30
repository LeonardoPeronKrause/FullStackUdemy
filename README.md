# FullStackUdemy
Curso FullStack com NodeJs, ReactJS e React Native

**setInterval**

function acao() {
    document.write('Executando...<br/>');
}


var timer = setInterval(() => {
    document.write('Executando!!!!!!<br/>');
}, 1000);


**setTimeOut**

setTimeout(() => {
    console.log('executou');
}, 3000);


**Objetos**

let pessoa = {
    nome: 'Leonardo',
    idade: 22,
    altura: 1.81,
    cargo: 'Desenvolvedor FullSatck'
};

let carro = {
    nome: 'Tiguan R Line',
    cor: 'branco',
    potencia: '211cv'
};

let usuarios = [
    {nome: 'Leonardo', cargo: 'Programador', status: 'ATIVO'}, 
    {nome: 'Elisa', cargo: 'Dentista', status: 'ATIVO'},
    {nome: 'Caio', cargo: 'Brigadeiro', status: 'ATIVO'}
];

console.log(usuarios);

**Desconstruindo Arrays**

let pessoa = {
    nome: 'Leonardo',
    sobrenome: 'Peron Krause',
    empresa: 'PK Tech',
    cargo: 'Programador FullSatck'
};

//console.log(pessoa.nome);
//console.log(pessoa.cargo);

let nome = 'teste'

const {nome: nomePesoa, cargo, empresa, sobrenome} = pessoa;

console.log(nomePesoa);
console.log(cargo);
console.log(sobrenome);
console.log(empresa);


//==================================================================

**Desconstruir um Array**

let nomes = ['Leonardo', 'Pedro', 'Eduardo'];

let { 0:leonardo, 1:terceirapessoa} = nomes;
console.log(leonardo, terceirapessoa);

let [primeironome, segundonome] = nomes;

console.log(primeironome, segundonome);
