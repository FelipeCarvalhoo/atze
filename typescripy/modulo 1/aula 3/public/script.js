/*Para atualizar o typescript, npx tsc src/script.ts --outDir public*/ 


var numero1 = document.querySelector('#numero1'); //estamos dizendo para o ts q #numero 1 e um elem html
var numero2 = document.querySelector('#numero2');
var botao = document.querySelector('.calcular');
var res = document.querySelector('#resultado');
function calcular(n1, n2) {
    return n1 + n2;
}
botao.addEventListener('click', function () {
    res.innerHTML = calcular(+numero1.value, +numero2.value).toString();
});
