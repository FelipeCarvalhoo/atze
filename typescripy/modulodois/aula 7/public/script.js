var nomes = ['Felipe', 'Paulo', 'Thiago', 90]; //Contextual Typing leu a array e notou que so tem strings, então ele não notificou nada
//coloquei um numero ali em cima e deu problema
nomes.forEach(function (nome) {
    if (typeof nome == 'string') {
        console.log(nome.toUpperCase());
    }
    else {
        console.log(nome);
    }
});
