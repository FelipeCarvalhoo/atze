
function loadPosts() {
    document.getElementById('posts').innerHTML = 'Carregando...'
    
    
    fetch('https://jsonplaceholder.typicode.com/posts')//aqui teria um segundo parametro, ele servira para colocar os metodos post, ou get, mas quando vc não especifica ele vai pelo get
   .then(function(resultado){
    return resultado.json();
   })
   .then(function(json){
    document.getElementById('posts').innerHTML = json.length+' posts'
   })
   .catch(function(error){
    console.log('Deu problema')
   });
}