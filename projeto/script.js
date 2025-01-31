// Spreed Operators
/*
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
*/

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