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