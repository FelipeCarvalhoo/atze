/*When you know what you're doing and want the typescript to stop sending you checks,
then you can use any...*/
var nomes = ['Felipe', 'Carvalho', 'Oliveira'];
nomes.push(90); //isso certamente não ira funcionar, a não ser, q la encima use any
nomes.push(false);
nomes.push(true);
console.log(nomes);
