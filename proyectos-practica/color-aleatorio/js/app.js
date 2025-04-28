// Seleccionamos los elementos
const boton = document.querySelector('button');
const color = document.getElementById('color');

function cambiarColorHex() {
  let valor = '0123456789ABCDEF';
  let colorHEX = '#';

  for(let i = 0; i < 6; i++) {
    let indiceColor = Math.floor(Math.random() * 16);
    colorHEX += valor[indiceColor];
  }

  return colorHEX
}

boton.addEventListener('click', function(){
  let colorAletorio = cambiarColorHex();
  
  color.textContent = colorAletorio;

  document.body.style.backgroundColor = colorAletorio;

  boton.style.backgroundColor = colorAletorio;
});