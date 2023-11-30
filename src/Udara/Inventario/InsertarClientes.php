<?php
$respuesta = array();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = validarCampo($_POST["nombre"]);
    $dispositivo = validarCampo($_POST["dispositivo"]);
    $descripcion = validarCampo($_POST["descripcion"]);
    $telefono = validarCampo($_POST["telefono"]);
    $fechaAlta = validarCampo($_POST["fechaAlta"]);

    if (!empty($nombre) && !empty($dispositivo) && !empty($descripcion) && !empty($telefono) && !empty($fechaAlta)) {
        $conexion = mysqli_connect("localhost", "root", "", "usuario");
        if(!$conexion){
            die('Error de Conexión a la Base de Datos: ' . mysqli_connect_error());
            
        }
        $consulta = "INSERT INTO clientes( Nombre_cliente, Telefono_cliente, Dispositivo, Descripcion, Fecha_de_Alta) VALUES ('$nombre','$telefono','$dispositivo','$descripcion','$fechaAlta')";
        $resultado = mysqli_query($conexion, $consulta);


        $respuesta['respuesta'] = 'correcto';
    } else {
        $respuesta['respuesta'] = 'incorrecto';
        $respuesta['mensaje'] = 'Todos los campos son obligatorios.';
    }
} else {
    $respuesta['respuesta'] = 'error';
    $respuesta['mensaje'] = 'La solicitud no es de tipo POST.';
}

header('Content-Type: application/json');
echo json_encode($respuesta);

function validarCampo($campo)
{
    // Realizar validaciones adicionales según sea necesario
    $campo = trim($campo);
    $campo = htmlspecialchars($campo);
    // Puedes agregar más validaciones aquí según tus requisitos
    return $campo;
}
?>
