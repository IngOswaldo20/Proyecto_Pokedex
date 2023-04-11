

export function getPokemonInfo(pokemon) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        const pokeImg = document.querySelector('[data-poke-img]');
        const vida = data.stats[0].base_stat;
        const ataque = data.stats[1].base_stat;
        const nombre =  data.name;
        const sprite =  data.sprites.front_default;
        pokeImg.setAttribute('src', sprite);
        pokeImg.style.backgroundSize = ' 5px 5px';

        return { vida, ataque , nombre};
        
      });
  }

  export function getPokemonInfo2(pokemon) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        const pokeImg2 = document.querySelector('[data-poke-img2]');
        const vida = data.stats[0].base_stat;
        const ataque = data.stats[1].base_stat;
        const nombre =  data.name;
        const sprite =  data.sprites.front_default;
        pokeImg2.setAttribute('src', sprite);
        pokeImg2.style.backgroundSize = ' 5px 5px';
        return { vida, ataque , nombre};
      });
  }
  
  var boton = document.getElementById("pelear"); // obtener el botón
  var boton1 = document.getElementById("Atacar");
  var boton2 = document.getElementById("Curar");
  var Atack = document.getElementById("AtacarAU");
  var Health = document.getElementById("CurarAU");
  var campana = document.getElementById("campana");

  pelear.addEventListener("click", function(){
    campana.play();
  });

  boton.addEventListener("click", function() {
    boton.style.display = "none"; // ocultar el botón
    boton1.style.display = "block"; // mostrar el botón 1
    boton2.style.display = "block"; // mostrar el botón 2
  });
  
  boton1.addEventListener("click", function() {
    Atack.play(); // reproducir el sonido
  });
  

  boton2.addEventListener("click", function() {
    Health.play(); // reproducir el sonido
  });


var menuAudio = document.getElementById("menuAudio");
menuAudio.volume = 0.3; 

const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

button1.addEventListener('click', function () {
    window.location.href = "inicio.html";
});

button2.addEventListener('click', function () {
    window.location.href = "pokedex.html";
});


  