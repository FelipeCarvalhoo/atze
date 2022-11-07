function firstLatterUpperCase(name) {
    var firstletter = name.charAt(0).toUpperCase();
    return firstletter + name.substring(1);
}
var oi = console.log('Digite seu nome: ');
firstLatterUpperCase(oi);
