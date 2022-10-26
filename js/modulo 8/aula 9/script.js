//Como fazer uma requisição com fetch
function loadPosts() {
    document.getElementById('posts').innerHTML = 'Carregando...'
    
    
    fetch('https://jsonplaceholder.typicode.com/posts')//aqui teria um segundo parametro, ele servira para colocar os metodos post, ou get, mas quando vc não especifica ele vai pelo get
   .then(function(resultado){
    return resultado.json();
   })
   .then(function(json){
    montarBlog(json);
   })
   .catch(function(error){
    console.log('Deu problema')
   });
}  

function montarBlog(lista) {
    let html = '';
    for(let i in lista){
    html += '<h3>'+lista[i].title+'</h3>';
    html += lista[i].body+'<br>';
    html += '<hr>'
    } = html;
}