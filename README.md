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

**Spreed Operators**

let primeiros = [1, 2, 3];

let numeros = [...primeiros, 4, 5, 10];
console.log(numeros);

let pessoa = {
    nome: 'Leoanrdo',
    idade: 22,
    cargo: 'Programador'
}

let novaPessoa = {
    ...pessoa,
    status: 'ATIVO',
    cidade: 'Fpolis/SC',
    telefone: 987654321
}
console.log(novaPessoa)

function novoUsuario(info) {
    let dados = {
        ...info,
        status: 'ATIVO',
        inicio: '20/03/2023',
        codigo: '12345'
    };

    console.log(dados);
}

novoUsuario({ nome: 'Leonardo', cargo: 'DEV'})

**Rest Operator**

function convidados(...nomes) {
    console.log('SEJAM BEM VINDO CONVIDADOS');
    console.log(nomes);
}

convidados('Leonardo', 'Pedro', 'Elisa', 'Julia');


function sorteador(...numeros) {
    console.log(numeros);

    const numeroGerado = Math.floor(Math.random() * numeros.length);
    console.log('Número gerado foi: ' + numeros[numeroGerado]);
}

sorteador(1, 2, 3 , 4, 5, 22);

**MAP = PERCORRER TODO UM ARRAY**

let lista = ['Leonardo', 'Pedro', 'Elisa', 'Julia'];

lista.map((item, index) => {
    console.log(`Passando ${item} - na posição ${index}`);
})

**REDUCE = BUSCA REDUZIR UM ARRAY**

let numeros = [5, 3, 2, 5];

let total = numeros.reduce((acumulador, numero, indice, original) => {
    console.log(`${acumulador} - total até o momento`);
    console.log(`${numero} - valor atual`);
    console.log(`${indice} - indice atual`);
    console.log(`${original} - array original`);
    console.log('===============================')

    return acumulador += numero;
})
console.log(`Total do reduce ${total}`)

**FIND**

let listagem = [5, 3, 'Leo', 2, 'Pedro'];

let busca = listagem.find((item) => {
    if (item === 'Leo') {
        return console.log('Item encontrado');
    }
})

console.log(busca);

**FILTER**

let palavras = ['Matheus', 'Jose', 'Joao', 'Leo', 'Pedro'];

let resultado = palavras.filter((item) => {
    return item.length <= 4;
})

console.log(resultado);

**Funções Anônimas**

function somar(a, b) {
    let tot = a + b;
    return console.log(tot)
}

somar(250, 356);

let subtrair = (v1, v2) => {
    let total= v1 - v2;
    console.log(total);
}

subtrair(100, 60);

let numeros = [1, 3, 5, 10];

numeros.map((item)=> {
    console.log(item)
})

**includes, startsWith, endsWith**

let nomes=['leo', 'pedro', 'joao'];

console.log(nomes.includes('lucas'))

if (nomes.includes('pedro')) {
    console.log('Está na lista')
} else {
    console.log('Nao esta na lista')
}

let nome = 'mateus';
console.log(nome.startsWith('m'));

console.log(nome.endsWith('s'));