/*Quando vc solber oque esta fzendo e quer que o ts pare de te mandar verificações,
então vc pode usar o any*/

let nomes: any = ['Felipe','Carvalho','Oliveira'];
nomes.push(90); //isso certamente não ira funcionar, a não ser, q la encima use any
nomes.push(false);
nomes.push(true);
nomes.push(Array);
console.log(nomes)