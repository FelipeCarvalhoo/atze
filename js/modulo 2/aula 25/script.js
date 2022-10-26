//Aula 25
//primeiro caso no uso da função:
let fruits = ['Banana', 'Laranja','Maça','Pera'];
let bigFruits = fruits.filter((value) => {//vai filtrar e retornar as quantidades que tem mais length
return value.length > 4
});

console.log(bigFruits);
//Abaixo usamos o fruits2.some que pega alguns itens e retorna a função, alem de some() podemos usar every() -  q pega tds!
//every() - so retorna quando tds são satisfeitos, some() - quando somente um for satisfeito!
let fruits2 = ['Uva','Pessego','Tamarindo','Maçã','Melancia'];
let ok = fruits2.some((value) => {
return value.length > 3
});

if(ok) {console.log('Algum item tem mais q tres letras')}else{console.log('nenhum item tem mais que tres letras')};

let fruits3 = ['Uva','Pessego','Tamarindo','Maçã','Melancia'];
fruits3.shift();//remove o primeiro item da array();

if(fruits3.includes('Uva')){console.log('Tem uva sim')}else{console.log('Tem uva não')};
