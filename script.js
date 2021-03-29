


function adicionarFilme() {
  const campoFilmeFavorito = document.querySelector("#filme");
  const campoTrailerFavorito = document.querySelector("#trailer");

  
  
  let filmeFavorito = campoFilmeFavorito.value;
    let trailerFilmeFavorito = campoTrailerFavorito.value.split("=")[1];
    
    validaFilme(filmeFavorito, trailerFilmeFavorito);
  
    campoFilmeFavorito.value = "";
    campoTrailerFavorito.value = "";
    console.log("clicar")
  }
  
  function validaFilme(filme, trailer) {
    if (filme.endsWith(".jpg") && trailer !== undefined) {
      listarFilmeETrailerNaTela(filme, trailer);
    } else {
      alert("Ops! Digite um endereço de imagem e trailer são válido!");
    }
  }
  
  function listarFilmeETrailerNaTela(filme, trailer) {
    const listaFilmes = document.querySelector("#listaFilmes");
    
    let elementoTrailer = `<div style="
    display: flex;
    align-items: center;
    width: 700px;">
    <img src=${filme} style="width: 182px;
    height: 300px;"/>
    <iframe width="560" height="310" src="https://www.youtube.com/embed/${trailer}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div>
    `;
    listaFilmes.innerHTML += elementoTrailer;
  }
  
  


  //---------------comentários--------------
  
  //array - conjunto de varias variavéis
  //push - utilizando para empurar uma quantidade de informações(Filmes)
  //length - informa todos os elementos dentro de uma variavel(array).
  //while - o programa fica rodando até achar o valor informado
  //for - estrutura de repetição/percorre o array
  //imdb - database de filmes (utilizado para incluir no projeto)
  
  /* 2 projeto
  
  var listaLinks = []
  contadorDeFilmes = 0
  
  function adicionarFilme() {
      var campoDoFilme = document.querySelector("#filme")
      var nomeDoFilme = campoDoFilme.value  
      // REQUEST DO FILME
      const options = {
          method: 'GET',
          url: 'https://api.themoviedb.org/3/search/movie?api_key=6ac040cdb08ce2085e436dba651a25aa&language=pt-BR&query=' + nomeDoFilme}
    
        axios.request(options).then(function (response) {
            // PEGANDO INFOS DO FILME
            var dataDoFilme = response.data["results"][0]
            var idDoFilme = dataDoFilme["id"]
            var nomeDoFilme = dataDoFilme["original_title"]
            var imgDoFilme = "https://image.tmdb.org/t/p/w500/" + dataDoFilme["poster_path"] 
          
            // OUTRO REQUEST USANDO IDDOFILME PARA PEGAR O LINK DO TRAILER
            const options = {
              method: 'GET',
              url: 'https://api.themoviedb.org/3/movie/' + idDoFilme + '/videos?api_key=6ac040cdb08ce2085e436dba651a25aa&language=en-US'}
        
            axios.request(options).then(function (response) {
              // COLOCANDO O LINK DO TRAILER NO HTML
              var keyDoTrailer = response.data["results"][0]["key"]
              var video = "https://www.youtube.com/embed/" + keyDoTrailer
              var trailer = document.getElementById("yt")
              trailer.src = video
              
              // MUDAR VIDEO FUNÇÃO NO HTML
              var linhaDoMudarVideo = "<a id='funcaoTrailer' href='#' " + "onClick='mudarVideo(" + contadorDeFilmes  + ")'" + ">"
              listaLinks[contadorDeFilmes] = video
              contadorDeFilmes = contadorDeFilmes + 1
              var linhaDoMudarVideoFinal = "</a>"
              // ADICIONAR POSTER
              var listaFilmes = document.querySelector("#listaFilmes")
              var elementoFilme = "<img src=" + imgDoFilme + " width=175 height=250>"
              listaFilmes.innerHTML = listaFilmes.innerHTML  + linhaDoMudarVideo + elementoFilme + linhaDoMudarVideoFinal
  
  
            })
          
        }).catch(function (error) {
            console.error(error);
            alert("Filme não encontrado! Digite outro!")
        });
    
    campoDoFilme.value = ""
    
    }
  
  // FUNÇÃO PARA MUDAR O VIDEO DE ACORDO COM O CLICK NO POSTER
  function mudarVideo(numeroDoFilme) {
      var trailer = document.getElementById("yt")
      trailer.src = listaLinks[numeroDoFilme]
  }   
  */
  
  
  
  
  
  