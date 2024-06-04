function OpereacionesMatematicas(a, b) {
    var a = parseInt(prompt("Ingrese el primer numero: "));
    var b = parseInt(prompt("Ingrese el segundo numero: "));

    var operacion = prompt("Escribar la operacion que quiera realizar: ");

    switch (operacion) {
        case 'sumar':
            resultado = a+b;
            break;

        case 'resta':
            resultado = a-b;
            break;

        case 'multiplicacion':
            resultado = a*b;
            break;

        case 'division':
            resultado = a/b;
            break;

        default:
            break;

    }

    alert("El resultado es: " + resultado)

    
}