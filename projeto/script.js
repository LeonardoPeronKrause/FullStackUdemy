// Rest Operator

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