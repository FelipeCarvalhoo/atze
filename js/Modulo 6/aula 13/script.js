//Vamos criar uma função que vai fazer com que a barra de rolagem possa subir ao clicar em algo na pagina


let rolagem = document.querySelector('.rolagem');
rolagem.addEventListener('click', ()=>{
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
});

rolagem.addEventListener('click',(decidirBotaoScroll)=>{
    if(window.scrollY === 0) {
        rolagem.style.display = 'none';
    }else{
        rolagem.style.display = 'block';
    }
});
decidirBotaoScroll();