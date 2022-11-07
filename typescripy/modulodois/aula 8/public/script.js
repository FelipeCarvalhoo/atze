function resumo(usuario) {
    return "Ol\u00E1 ".concat(usuario.nome, ", tudo bem? voc\u00EA tem ").concat(usuario.idade, " anos");
}
//implementação
var u = {
    nome: 'felipe',
    idade: 24
};
resumo(u);
