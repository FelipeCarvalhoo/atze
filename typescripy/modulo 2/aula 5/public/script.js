function firstLatter(name) {
    var firstletter = name.charAt(0).toUpperCase();//graças ao charAt as letras ficaram maiusculas
    return firstletter + name.substring(1);
}
let tela = firstLatter('felipe');
console.log(tela)