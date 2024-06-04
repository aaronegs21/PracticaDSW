function determinarParidad() {
    // Capturar el numero ingresado por el usuario
    var numeroInput = document.getElementById("numeroInput").value;
    
    // Convertir el número a entero
    var numero = parseInt(numeroInput);
    
    // Comprobar si el número es par o impar
    if (numero % 2 === 0) {
        // Si el número es divisible por 2, es par
        document.getElementById("resultadoParidad").innerText = "El número " + numero + " es par.";
    } else {
        // Si no es divisible por 2, es impar
        document.getElementById("resultadoParidad").innerText = "El número " + numero + " es impar.";
    }
}

}
