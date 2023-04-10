export function getPokemonInfo(pokemon) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        const pokeImg = document.querySelector('[data-poke-img]');
        const vida = data.stats[0].base_stat;
        const ataque = data.stats[1].base_stat;
        const nombre =  data.name;
        console.log(vida);
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
  
function pelear(nombre, vida, ataque){
  
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


  