<?php
$conexion = mysqli_connect('localhost', 'root', '', 'usuario');

// Verificar la conexión
if (!$conexion) {
    die('Error de Conexión: ' . mysqli_connect_error());
    return;
}

$respuesta = array();

// Consulta para obtener los datos de la tabla "Clientes"
$query = "SELECT * FROM clientes";
$resultado = mysqli_query($conexion, $query);

// Verificar si se ejecutó correctamente la consulta
if ($resultado) {
    // Obtener los resultados como un array asociativo
    $datosClientes = array();

    while ($fila = mysqli_fetch_assoc($resultado)) {
        $datosClientes[] = $fila;
    }

    // Verificar si hay registros en la tabla "Clientes"
    if (!empty($datosClientes)) {
        $respuesta['total'] = true;
        $respuesta['datos'] = $datosClientes;
    } else {
        $respuesta['total'] = false;
    }

    // Liberar el resultado
    mysqli_free_result($resultado);
} else {
    $respuesta['error'] = mysqli_error($conexion);
    // Manejar el error si la consulta no se ejecutó correctamente
    echo 'Error en la consulta: ' . mysqli_error($conexion);
}

// Cerrar la conexión
mysqli_close($conexion);

header('Content-Type: application/json');
echo json_encode($respuesta);
?>
