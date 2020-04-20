var turno = 1;
var queTurno;
var arreglo = new Array(9);
var celdas = document.getElementsByClassName("Tablero");


function ganaJugador(letra) {
    if (
        (arreglo[0] == letra && arreglo[1] == letra && arreglo[2] == letra) ||
        (arreglo[3] == letra && arreglo[4] == letra && arreglo[5] == letra) ||
        (arreglo[6] == letra && arreglo[7] == letra && arreglo[8] == letra) ||
        (arreglo[0] == letra && arreglo[3] == letra && arreglo[6] == letra) ||
        (arreglo[1] == letra && arreglo[4] == letra && arreglo[7] == letra) ||
        (arreglo[2] == letra && arreglo[5] == letra && arreglo[8] == letra) ||
        (arreglo[0] == letra && arreglo[4] == letra && arreglo[8] == letra) ||
        (arreglo[2] == letra && arreglo[4] == letra && arreglo[6] == letra)
    ) {
        if (letra == "X") alert("el ganador es :" + jugador1.value);
        else alert("el ganador es :" + jugador2.value)
        window.location.reload();
    }
}

function Tateti(evento) {

    var celda = evento.target;
    celda.removeEventListener("click", Tateti);

    var idCelda = evento.target.id;


    var posicionAMarcar = idCelda[1] - 1;


    queTurno = turno % 2;


    if (queTurno == 1) {
        celda.innerHTML = "X";
        celda.style.background = "#EC673A";
        arreglo[posicionAMarcar] = "X";
        ganaJugador("X");
    } else {
        celda.innerHTML = "O";
        celda.style.background = "#1C5F81";
        arreglo[posicionAMarcar] = "O";
        ganaJugador("O");
    }

    if (turno == 9) {
        alert("Empate");

        window.location.reload();
    } else {
        turno++;
    }
}

function cargarDocumento() {

    var jugador1 = document.getElementById("jugador1");
    var jugador2 = document.getElementById("jugador2");
    console.log(jugador1.value)
    console.log(jugador2.value)
    var n = 0;

    while (n < celdas.length) {

        celdas[n].addEventListener("click", Tateti);
        n++;

    }
}

window.addEventListener("load", cargarDocumento);


window.onload = function() {
    var iniciar = document.getElementById("empezar"); //# para id . para clases sin nada para etiquetas
    iniciar.addEventListener("click", this.cargarDocumento);
    var recargar = document.getElementById("recargar");
    recargar.addEventListener("click", function() {
        location.reload();
    });
}