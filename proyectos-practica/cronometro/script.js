/* Referencias a los elementos */
const botonIniciarPausar = document.getElementById('boton-iniciar-pausar');
const botonReiniciar = document.getElementById('boton-reiniciar');
const cronometro = document.getElementById('cronometro');

/* Varibles para el tiempo */
let [segundos, minutos, horas] = [0, 0, 0];

/* Variables para el estado del cronometro */
let estadoCronometro = 'pausado';
let intervaloTiempo;

/* Funcion para el tiempo */
function actualizarCronometro(){
    segundos++;
    if (segundos == 60){
        segundos = 0;
        minutos++;
        if (minutos == 60){
            minutos = 0;
            horas++;
        }
    }

    /* Formato del tiempo */

    const segundosConFormato = formatoTiempo(segundos);
    const minutosConFormato = formatoTiempo(minutos);
    const horasConFormato = formatoTiempo(horas);

    /* Se actualiza el contenido del cronometro */
    cronometro.innerText = `${horasConFormato}:${minutosConFormato}:${segundosConFormato}`

}

function formatoTiempo(unidadDeTiempo){
    return unidadDeTiempo < 10 ? '0'+ unidadDeTiempo: unidadDeTiempo;
}

/* Accion producido al precionar */
botonIniciarPausar.addEventListener('click', function(){
    if (estadoCronometro === 'pausado') {
        intervaloTiempo = window.setInterval(actualizarCronometro, 1000);
        botonIniciarPausar.innerHTML = '<i class="bi bi-pause-fill"></i>';
        botonIniciarPausar.classList.remove('iniciar');
        botonIniciarPausar.classList.add('pausar');
        estadoCronometro = 'andando';
    } else {
        window.clearInterval(intervaloTiempo);
        botonIniciarPausar.innerHTML = '<i class="bi bi-play-fill"></i>';
        botonIniciarPausar.classList.remove('iniciar');
        botonIniciarPausar.classList.add('pausar');
        estadoCronometro = 'pausado'
    }
});

botonReiniciar.addEventListener('click', function() {
    window.clearInterval(intervaloTiempo);

    // Reiniciar cronometro
    horas = 0;
    minutos = 0;
    segundos = 0;

    cronometro.innerHTML = '00:00:00';

    botonIniciarPausar.innerHTML = '<i class="bi bi-play-fill"></i>';
    botonIniciarPausar.classList.remove('pausar');
    botonIniciarPausar.classList.add('iniciar')


    estadoCronometro = 'pausado';

});