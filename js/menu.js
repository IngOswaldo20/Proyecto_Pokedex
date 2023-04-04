
var menuAudio = document.getElementById("menuAudio");
menuAudio.volume = 0.3; // establece el volumen a la mitad del máximo

const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

button1.addEventListener('click', function () {
    alert('Botón 1 presionado');
});

button2.addEventListener('click', function () {
    alert('Botón 2 presionado');
});
