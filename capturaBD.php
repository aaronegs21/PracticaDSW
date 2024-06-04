<?php 
if(isset($_POST['registros'])){
    $Nombre=$_POST['Nombre'];
    $Telefono=$_POST['Telefono'];
    $Correo=$_POST['Correo'];
    $Comentarios=$_POST['Comentarios'];

    $guardar = "INSERT INTO contactos VALUES ('$Nombre','$telefono','$Correo',$Comentarios,'')";

    $ejecutar = mysqli_query ($conexion,$guardar);

}

?>