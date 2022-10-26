function mostrar() {
    let imagem = document.querySelector('.imagem').files[0];
    let img = document.createElement('img');
    img.src = URL.createObjectURL(imagem);
    img.width = 200;

    document.querySelector('.area').appendChild(img);
}
//com o caso acima posso, selecionar um file, e exibi-lo na tela!