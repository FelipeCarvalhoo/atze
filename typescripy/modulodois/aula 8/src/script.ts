function resumo(usuario: {nome:string,
idade:number}) {
return `Olá ${usuario.nome}, tudo bem? você tem ${usuario.idade} anos`
}
//implementação
let u = {
    nome: 'felipe',
    idade: 24
};
resumo(u);