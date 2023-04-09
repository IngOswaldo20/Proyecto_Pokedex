export function getPokemonInfo(pokemon) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        const vida = data.stats[0].base_stat;
        const ataque = data.stats[1].base_stat;
        const nombre =  data.name;
        return { vida, ataque , nombre};
      });
  }
  
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


  