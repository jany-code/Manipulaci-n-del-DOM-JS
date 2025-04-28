const listaTopping = document.getElementById('lista-toppings');

//console.log(listaTopping.parentElement.parentElement.parentElement);
//console.log(listaTopping.parentNode); 

//console.log(listaTopping.children);

// TRABAJA CON NODOS (NO ELEMENTOS DE HTML)
console.log(listaTopping.lastChild);

// DEVUELVE ELEMENTO HTML
console.log(listaTopping.children[0])

// OBTENEMOS ELEMENTOS DE HTML
console.log(listaTopping.firstElementChild);
console.log(listaTopping.lastElementChild);

// HERMANOS - TRABAJAMOS CON ELEMENTOS HTML
console.log(listaTopping.previousElementSibling);
console.log(listaTopping.nextElementSibling);

//TRABAJAMOS CON ELEMENTOS NODOS
console.log(listaTopping.previousSibling);
console.log(listaTopping.nextSibling);

// LO PODEMOS ENCADENAR
console.log(listaTopping.previousElementSibling.parentElement.lastElementChild);