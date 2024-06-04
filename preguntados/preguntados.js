let capitales = ["mexico.svg", "italia.svg", "brasil.svg", "peru.svg", "china.svg", "jordania.svg", "india.svg"];
let correcta = [1, 0, 2, 1, 0, 1, 2];

let opciones = [];

opciones.push(["Ciudad de México", "Roma", "Río de Janeiro"]);
opciones.push(["Ciudad de México", "Roma", "Río de Janeiro"]);
opciones.push(["Brasilia", "Roma", "Río de Janeiro"]);
opciones.push(["Ciudad de México", "Lima", "Río de Janeiro"]);
opciones.push(["Beijing", "Roma", "Río de Janeiro"]);
opciones.push(["Ciudad de México", "Petra", "Río de Janeiro"]);
opciones.push(["Ciudad de México", "Roma", "Nueva Delhi"]);

let posActual = 0;
let cantidadAcertadas = 0;

function comenzarJuego() {
    posActual = 0;
    cantidadAcertadas = 0;
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    cargarCapital();
}

function cargarCapital() {
    if (capitales.length <= posActual) {
        terminarJuego();
    } else {
        limpiarOpciones();

        document.getElementById("imgCapital").src = "img/" + capitales[posActual];
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
    }
}

function limpiarOpciones() {
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";
    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
}

function comprobarRespuesta(opElegida) {
    if (opElegida == correcta[posActual]) { // acertó
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
        cantidadAcertadas++;
    } else {
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";
        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada";
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada";
    }
    posActual++;
    setTimeout(cargarCapital, 1000);
}

function terminarJuego() {
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = capitales.length - cantidadAcertadas;
}

function volverAlInicio() {
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
    document.getElementById("pantalla-juego").style.display = "none";
}