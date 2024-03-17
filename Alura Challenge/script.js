var botonEncriptar = document.querySelector('boton-encriptar');
var texto = document.getElementById('text-area-encriptar');


botonEncriptar.onclick = encriptar;

function encriptar(){
    var textoEncriptar = texto.value;
    console.log(textoEncriptar)
}



