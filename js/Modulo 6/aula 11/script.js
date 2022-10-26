function trocarImagem(filename,dataanimal) {
    document.querySelector('.imagem').setAttribute('src','image/'+filename);
    document.querySelector('.imagem').setAttribute('data-animal',dataanimal);
//logo acima perceba que pegamos o parametro que criamos no html, e jogamos aqui no js
}
function pegarOanimal() {
   let animal = document.querySelector('.imagem').getAttribute('data-animal');
    alert('o animal é '+animal);

}
