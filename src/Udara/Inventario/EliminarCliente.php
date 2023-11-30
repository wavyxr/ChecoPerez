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
            

            $sql = "DELETE FROM clientes WHERE id = $id";
            $resultado = mysqli_query($conexion, $sql);

            if (!$resultado) {
                $respuesta["error"] = "No se ha podido eliminar el cliente";
            }
            else{
                $respuesta["exito"] = "Se ha eliminado el cliente";
            }
            
            
        } else {
            $respuesta["error"] = "No se ha recogido el id";
        }
    } else {
        $respuesta["error"] = "Error en metodo POST";
    }
}

// Retornamos la respuesta en formato JSON
header('Content-Type: application/json');
echo json_encode($respuesta);
?>
