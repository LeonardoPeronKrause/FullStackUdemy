var peso;
var altura;
var resultado;
var imc;

function calc(event) {
    event.preventDefault();

    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;

    imc = peso / (altura * altura);

    resultado = document.getElementById('resultado');

    if (imc < 17) {
        resultado.innerHTML = '<br> Seu resultado foi de: ' + imc.toFixed(2) + '<br> Cuidado seu imc está muito abaixo do peso!';
    } else if (imc > 17 && imc <= 18.49 ) {
        resultado.innerHTML = '<br> Seu resultado foi de: ' + imc.toFixed(2) + '<br> Cuidado seu imc está abaixo do peso!';
    } else if (imc > 18.49 && imc <= 24.99) {
        resultado.innerHTML = '<br> Seu resultado foi de: ' + imc.toFixed(2) + '<br> Parabéns você está no seu peso ideal!';
    } else if (imc > 24.99 && imc <= 29.99) {
        resultado.innerHTML = '<br> Seu resultado foi de: ' + imc.toFixed(2) + '<br> Cuidado seu imc está acima do peso!';
    } else if (imc >= 30) {
        resultado.innerHTML = '<br> Seu resultado foi de: ' + imc.toFixed(2) + '<br> Cuidado você está em um nível de obesidade';
    }

    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
    
}