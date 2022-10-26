/*Passei muitas horas tentando descobrir porque, a função abaixo não estava funcionando,
descobri que ela funciona se eu não usar o document.getElementById
*/

let numero1 = document.querySelector('#numero1');
let numero2 = document.querySelector('#numero2');
let botao = document.querySelector('#calcular');
var res = document.querySelector('#resultado');

function calcular(n1,n2) {
    if(typeof n1 == 'number' && n2 == 'number'){
        return n1 + n2;
    }else{
        n1 = parseInt(n1);
        n2 = parseInt(n2);
        return n1 + n2;
    }
}
botao.addEventListener('click', function(){
    res.innerHTML = `${calcular( numero1.value, numero2.value)}`;
})






















/*
function calcular(n1,n2) {
    if(typeof n1 == 'number' && typeof n2 == 'number') {
        return n1 + n2;
    }else{
        n1 = parseInt(n1);
        n2 = parseInt(n2);
        return n1 + n2;
    }
}

botao.addEventListener('click', function() {
    resultado.innerHTML = calcular(numero1.value, numero2.value)
});
*/