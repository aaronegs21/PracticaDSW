function habilitar()
{
  let ciudad = document.getElementById('ciudad');

  if(ciudad.selectedIndex != 1)
  {
    document.getElementById("transporte").disabled = true;
  }else
  {
    document.getElementById("transporte").disabled = false;
  }
}

function aparecer()
{
  let select = document.getElementById('camisa');
  let tr = document.querySelectorAll("tr:nth-child(11),tr:nth-child(12)");
  let form = document.getElementById('formulario');

  if(select.selectedIndex == 1)
  {
      tr[0].classList.remove('prueba');
      tr[1].classList.remove('prueba');
      form.style.height = '500px';
  }else
  {
    tr[0].classList.add('prueba');
    tr[1].classList.add('prueba');
    form.style.height = '450px';
  }
}

function mayusculas(e){
  e.value = e.value.toUpperCase();
}

function valideKey(evt){

      // code is the decimal ASCII representation of the pressed key.
      var code = (evt.which) ? evt.which : evt.keyCode;

      if(code==8) { // backspace.
        return true;
      } else if(code>=48 && code<=57) { // is a number.
        return true;
      } else{ // other keys.
        return false;
      }
    }

function validacion(){

  let nombre = document.getElementById('nombres').value;
  let apellido = document.getElementById('apellidos').value;
  let edad = document.getElementById('edad').value;
  let sexo = document.getElementById('sexo').selectedIndex;
  let ciudad = document.getElementById('ciudad').selectedIndex;
  let celular = document.getElementById('celular').value;
  let transporte = document.getElementById('transporte').selectedIndex;
  let camisa = document.getElementById('camisa').selectedIndex;
  let talla = document.getElementById('talla').selectedIndex;

  if(nombre.length == 0){
        alert('Introduzca un nombre, por favor.');
        return false;
      }

  if(apellido.length == 0){
      alert('Introduzca un apellido, por favor.');
      return false;
    }

  if(edad.length == 0){
      alert('Introduzca la edad, por favor.');
      return false;
    }

  if(sexo == "" || sexo == 0){
      alert('Debe elegir una opcion en la lista de sexos, por favor.');
      return false;
  }

  if(ciudad == "" || ciudad == 0){
      alert('Debe elegir una ciudad, por favor.');
      return false;
  }else if (ciudad == 1) {
    if(transporte == "" || transporte == 0){
        alert('Debe elegir una opcion en trasnporte, por favor.');
        return false;
      }
  }

  if(celular.length == 0){
      alert('Introduzca un numero de telefono, por favor.');
      return false;
    }else if (celular.length < 10) {
      alert('Introduzca un numero completo, por favor.')
      return false;
    }

  if(camisa == "" || camisa == 0){
      alert('Debe elegir una opcion en camisa, por favor.');
      return false;
    }else if (camisa == 1) {
      if(talla == "" || talla == 0){
          alert('Debe elegir un talla, por favor.');
          return false;
        }
    }

    return true;
}

function soloLetras(evt){
  let letra = (evt.which) ? evt.which : evt.keyCode;

  if (letra == 8){
    return true;
  }else if (letra == 32) {
    return true;
  }else if (letra>=97 && letra<=122) {
    return true;
  }else {
    return false;
  }

  
}