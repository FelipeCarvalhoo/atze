//aprendemos como deixar restritos alguns numeros

let cartao = '1234123412341234';
//este cartão termina com esses 4 numeros?
let lastDigits = cartao.slice(-3);
//let cartaoMascarado = lastDigits.padStart(16, '*');
//este cartão começa com esses 3 numeros?
let cartaoMascarado = lastDigits.padEnd(16,'*');
console.log('Seu cartão começa ou termina com esses numeros: '+cartaoMascarado+'?');