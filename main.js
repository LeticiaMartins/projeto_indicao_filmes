$(document).ready(function(){
    carregar_json('genero');

    
    arrayGeneros = [];
    function carregar_json(id){
        let html = '';

        $.getJSON('https://api.themoviedb.org/3/genre/movie/list?api_key=a1d1dd7a770900d8a27583c2f12579f4&language=pt-BR', function(data){
            html += '<option>Selecionar '+'</option>';
            if(id == 'genero'){
                
                for(let i = 0; i < data.genres.length; i++){
                    html += '<option value='+ data.genres[i].name +'>'+ data.genres[i].name +'</option>';
                    arrayGeneros.push(data.genres[i]);
                }
            }
            $('#'+id).html(html);
        });
        
    }
    
   $( "#botao" ).click(function() {
        generoSelecionado = document.getElementById('genero').value;

        pegar_genero = arrayGeneros.find(element => element.name == generoSelecionado);


        $.getJSON('https://api.themoviedb.org/3/movie/popular?api_key=a1d1dd7a770900d8a27583c2f12579f4&language=pt-BR', function(data2){
            let items = [];
            for(let i = 0; i < data2.results.length; i++){
                items.push(data2.results[i]);
            }
        let pegar_filme = items.find(element => element = pegar_genero);
        let imagem = pegar_filme.poster_path
        
    
        let url = "".concat('https://image.tmdb.org/t/p/w185',imagem);
        
        
        let img = document.createElement("IMG")
        img.src = url;
        document.getElementById('imagens').appendChild(img);
        
        });
        
    });
 
});

