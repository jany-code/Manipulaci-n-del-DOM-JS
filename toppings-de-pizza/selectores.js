// SELECCIONAR ELEMENTOS EN EL DOM


// SELECCIONAR UN ELEMENTO DEL DOM POR SU ID .getElementById
const titulo = document.getElementById('titulo');
console.log(titulo);



// SELLECCIONAR POR CLASE .getElementsByClassName
const toppings = document.getElementsByClassName('topping');
console.log(toppings[0]);



// SELECCIONAR POR EL NOMBRE DE LA ETIQUETA .getElementsByTagName
const misToppings = document.getElementsByTagName('li')
console.log(misToppings)



//SELECCIONAR EL PRIMER ELEMENTO POR CLASE CSS query.Seleccior
//                                                     ('ul li.fondo-naranja');
const priemerToppingNoMarron = document.querySelector('ul li:not(.fondo-marron)');
console.log(priemerToppingNoMarron);



//SELECCIONAR TODOS LOS ELEMENTO POR CLASE CSS query.
const toppingsNaranja = document.querySelectorAll('.fondo-naranja');
console.log(toppingsNaranja[0]);
console.log(toppingsNaranja[1]);


//const toppings = document.querySelectorAll('.topping');
//console.log(toppings)
