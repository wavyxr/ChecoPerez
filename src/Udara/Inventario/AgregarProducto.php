<?php
     $conexion = mysqli_connect("localhost", "root", "", "usuario");
     $respuesta = array();
     if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $TipoPieza = validarCampo($_POST["TipoPieza"]);
        $modelo = validarCampo($_POST["modelo"]);
        $cantidad = validarCampo($_POST["cantidad"]);
        $descripcion = validarCampo($_POST["descripcionPieza"]);
        $precio = validarCampo($_POST["precio"]);
    
        if (!empty($TipoPieza) && !empty($modelo) && !empty($cantidad) && !empty($descripcion) && !empty($precio)) {
            $conexion = mysqli_connect("localhost", "root", "", "usuario");
            if(!$conexion){
                die('Error de Conexión a la Base de Datos: ' . mysqli_connect_error());
                
            }
            $consulta = "INSERT INTO productos ( Tipo_de_pieza, Modelo, Cantidad, Descripcion, Precio) VALUES ('$TipoPieza','$modelo','$descripcion','$precio','$cantidad')";
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
    

 