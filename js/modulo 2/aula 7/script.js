let numero = prompt('Digite um numero');
//let porcentagem = prompt('Digite o numero que sera a porcentagem do outro numero');

numero = parseInt(numero);
let porcentagem = numero*0.40;
console.log('O desconto e: '+porcentagem);
let total = numero - porcentagem;
console.log('O total ficou: '+total);