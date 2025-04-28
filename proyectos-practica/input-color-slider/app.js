// Obtenemos las referencias los input's
const inputRojo = document.getElementById('color-rojo');
const inputVerde = document.getElementById('color-verde');
const inputAzul = document.getElementById('color-azul');

// Obtenemos las referencias a los valores (<p>)
let textoRojo = document.getElementById('texto-rojo');
let textoVerde = document.getElementById('texto-verde');
let textoAzul = document.getElementById('texto-azul');

// Declaramos nuevas variables y asignamos los rangos por defecto
let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

// Actualizamos los valores de los rangos
textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;

// Funcion que obtiene los nuevos valores y forma el color RGB
function cambiarColor() {
  let colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
  document.body.style.backgroundColor = colorRGB;
}

// Obtenemos los valores de los input
inputRojo.addEventListener('change', (e) =>{
  rojo = e.target.value;
  textoRojo.innerText = rojo;
  cambiarColor(rojo, verde, azul);
});

inputVerde.addEventListener('change', (e) => {
  verde = e.target.value;
  textoVerde.innerText = verde;
  cambiarColor(rojo, verde, azul);
});

inputAzul.addEventListener('change', (e) => {
  azul = e.target.value;
  textoAzul.innerText = azul;
  cambiarColor(rojo, verde, azul);
});