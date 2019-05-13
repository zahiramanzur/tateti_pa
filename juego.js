var jugador = null;


var jugadorAzar = null;
var ganador = null;
var arreglo = new Array(8);

var nombre1;
var nombre2;
var cantMov = 0;
var comenzarNuevo = false;
var enCurso = false;

var ganadores = false;

var numGanador;

function comenzarJuego() {


    if (comenzarNuevo) {

        location.reload();
    }

    if (!enCurso) {
        nombre1 = document.getElementById("nombre1").value;
        nombre2 = document.getElementById("nombre2").value;
        habilitar();


        jugadorAzar = Math.floor(Math.random() * 2);

        if (jugadorAzar == 0) {

            jugador = 0;
            document.getElementById("turno").innerText = "Juega: " + nombre1 + " con rojo";
        } else {

            jugador = 1;
            document.getElementById("turno").innerText = "Juega: " + nombre2 + " con verde";
        }
    }
};

function movimiento(posicion) {
    enCurso = true
    if (arreglo[posicion] == undefined) {



        const marca = jugador == 0 ? "X" : "O"

        arreglo[posicion] = marca
        simboloX = marca
        refreshUI(posicion, marca)
        verificarGanador(marca)
        jugador = (jugador + 1) % 2

        console.log(arreglo)


    }

};

function verificarGanador(marca) {
    cantMov++;
    // for verificar filas
    for (var i = 0; i < 10; i = i + 3) {

        if (arreglo[i] == marca && arreglo[i + 1] == marca && arreglo[i + 2] == marca) {

            ganador = true;

        }
    }

    //for verifica columnas
    for (var i = 0; i < 3; i++) {


        if (arreglo[i] == marca && arreglo[i + 3] == marca && arreglo[i + 6] == marca) {

            ganador = true;

        }
    }
    //verificar diagonales
    if (arreglo[0] == marca && arreglo[4] == marca && arreglo[8] == marca) {
        ganador = true;
    }
    if (arreglo[2] == marca && arreglo[4] == marca && arreglo[6] == marca) {
        ganador = true;
    }

    if (ganador) {

        if (marca == "X") {

            document.getElementById("gana1").innerText = "GANA 1" + nombre1;

            numGanador = 1;
            document.getElementById("user1").value = nombre1;
            document.getElementById("boton1").disabled = true;
            document.getElementById("boton2").disabled = false;
            //    mandarGanador();
        } else {
            document.getElementById("gana2").innerText = "GANA 2" + nombre2;

            numGanador = 2;
            document.getElementById("user2").value = nombre2;
            //  mandarGanador();
            document.getElementById("boton1").disabled = true;
            document.getElementById("boton2").disabled = false;
        }
        comenzarNuevo = true;


    }
    if (cantMov == 9 && ganador != true) {
        ganador = false
        document.getElementById("gana").innerText = "EMPATE ";
    } else if (cantMov < 9 && ganador != true) {
        if (marca == "X") {
            document.getElementById("turno").innerText = "Juega: " + nombre2;
        } else {
            document.getElementById("turno").innerText = "Juega: " + nombre1;

        }


    }

}


function desabilitar() {


    for (var i = 0; i < 9; i++) {
        document.getElementById(i).disabled = true;


    }

    document.getElementById("boton2").disabled = true;

}

function refreshUI(posicion, marca) {

    document.getElementById(posicion).innerText = arreglo[posicion]
    document.getElementById(posicion).disabled = true;

    if (marca == "X") {
        document.getElementById(posicion).style.backgroundColor = "red";
    } else {

        document.getElementById(posicion).style.backgroundColor = "green";
    }

}

function habilitar() {

    for (var i = 0; i < 9; i++) {
        document.getElementById(i).disabled = false;


    }



}

function mandarGanador() {

    console.log("entro")
    if (numGanador == 1) {
        console.log("ke")
        document.getElementById("envia1").submit();

    } else if (numGanador == 2) {
        console.log("entre")
        document.getElementById("envia2").submit();
    }

    // comenzarJuego();
}