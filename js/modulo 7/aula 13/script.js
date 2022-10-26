//Usando o setInterval() e tbm o clearInterval()!!!

//Abaixo esta a função para rodar a data e hora tudo ao mesmo tempo
function showTime() {
    let d = new Date();
    let dd = d.getDate();
    let m = d.getMonth();
    let y = d.getFullYear();
    let h = d.getHours();
    let n = d.getMinutes();
    let s = d.getSeconds();
    let txt = dd+'/'+m+'/'+y+'  '+h+':'+n+':'+s;
    document.querySelector('.demo').innerHTML = txt;
}
/*se eu ficar mandando showTime() varias vezes no console, os numeros ficaram atualizando, para realizar essa operação e necessario
usar o setInterval que esta logo abaixo*/
let timer;
document.querySelector('.iniciar').addEventListener('click', (e)=>{
    timer = setInterval(showTime, 1000);//showTime e o nome da função que o setInterval vai rodar! os 1000 são milisegundos
}); 

document.querySelector('.parar').addEventListener('click', (e)=>{
 clearInterval(timer);
});
