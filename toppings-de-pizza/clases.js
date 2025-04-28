const primerTopping = document.querySelector('.topping');

//  CREAMOS UNA CLASE
primerTopping.classList.add('texto-verde');
//  VERIFICA SI EXISTE UNA CLASE
console.log(primerTopping.classList.contains('fondo-marron'));
//  ELIMINA UNA CLASE
primerTopping.classList.remove('fondo-marron')

console.log(primerTopping.classList)
