//  onclick="mostrarClic('Champiñones')"
/*
function mostrarClic(topping) {
    console.log(topping)
}   */

// .addEvenListener()
const toppings = document.getElementsByTagName('li');

// FUNCION EXPLICITA
function mostrarClic(e) {
    console.log(e.target.innerText);
}

for (const topping of toppings) {
    // SE UTILIZA EL EVENTO 'click'
    topping.addEventListener('click', (e) => {
        console.log(e.target.innerText);
    })
}