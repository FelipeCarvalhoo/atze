//Nessa aula usamos o promisse para fazer uma function assincrona
//A function assincrona e um função que esta rodando enquanto a pagina esta funcionando
function pegarTemperatura() {
    return new Promise(function(resolve, reject) {//Na promisse e obrigatorio ter o resolve, reject => pelo menos uma
   console.log('Pegando temperatura...')

    setTimeout(function(){
        resolve("40 na sombra");
    }, 2000)
});
};

//Usando a promisse
//Lembrando posso usar a função resolve quando der certo, e reject quando algo deu errado!
console.log('Codigo antes:')

let temp = pegarTemperatura();

//console.log(temp);//ao fazer aqui, deixamos a promisse pendente, existe tres estatos -pending, finalizado, erro!
console.log('Codigo durante:')

temp.then(function(resultado){    //then sig, pega temp e então...

console.log('Temperatura: '+resultado);
});

//Qando der erro?
temp.catch(function(error){

   console.log('Eita deu errado')

});

console.log('Codigo depois!')

//E importante demais vc entender o caso acima
