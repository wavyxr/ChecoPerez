<?php
    $conexion = mysqli_connect("localhost", "root", "", "usuario");
    $respuesta = array();


    if (!$conexion) {
        die("No se ha podido conectar con la base de datos");
        $respuesta["error"] = "No se ha podido conectar con la base de datos";
    } else {
        // Recogemos los datos
        $data = json_decode(file_get_contents("php://input"), true);

        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            if (isset($data['id'])) {
                $id = $data['id'];
                $nombre_cliente = $data['nombre_cliente'];
                $telefono = $data['telefono_cliente'];
                
                $dispositivo = $data['dispositivo'];
                $descripcion = $data['descripcion'];
                $fecha_alta = $data['fecha_alta'];

                // Construir la consulta UPDATE
                $sql = "UPDATE clientes 
                        SET Nombre_cliente = '$nombre_cliente', 
                            Telefono_cliente = '$telefono', 
                            Dispositivo = '$dispositivo', 
                            Descripcion = '$descripcion', 
                            Fecha_de_Alta = '$fecha_alta'
                        WHERE id = $id";
                $resultado = mysqli_query($conexion, $sql);

                
                if (!$resultado) {
                    $respuesta["error"] = "No se ha podido actualizar el cliente";
                } else {
                    $respuesta["exito"] = "Se ha actualizado el cliente";
                }
            } else {
                $respuesta["error"] = "No se ha recogido el id";
            }
        } else {
            $respuesta["error"] = "Error en método POST";
        }
    }

    // Retornamos la respuesta en formato JSON
    header('Content-Type: application/json');
    echo json_encode($respuesta);
?>
