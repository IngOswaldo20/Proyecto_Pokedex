
var menuAudio = document.getElementById("menuAudio");
menuAudio.volume = 0.3; // establece el volumen a la mitad del máximo

const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

button1.addEventListener('click', function () {
    window.location.href = "lucha.html";
});

button2.addEventListener('click', function () {
    window.location.href = "pokedex.html";
});
