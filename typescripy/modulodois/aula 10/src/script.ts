function mostrarIdade(idade: string | number) { /*Se eu usar o string | number, posso editar como sera a propriedade
porem e obrigatorio, eu junte string com number, e obrigatorio fazer uma verificação!*/
if(typeof idade == 'string') {
 console.log(idade.toUpperCase());
}else{
    console.log(idade);
}
}
mostrarIdade(90);
mostrarIdade('90'); 