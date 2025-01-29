# FullStackUdemy
Curso FullStack com NodeJs, ReactJS e React Native

// setInterval

function acao() {
    document.write('Executando...<br/>');
}


var timer = setInterval(() => {
    document.write('Executando!!!!!!<br/>');
}, 1000);


// setTimeOut

setTimeout(() => {
    console.log('executou');
}, 3000);


// Objetos

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
