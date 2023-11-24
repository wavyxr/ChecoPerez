<?php
$conexion = mysqli_connect('localhost', 'root', '', 'usuario');

if (!$conexion) {
    die('Error de conexión a la base de datos: ' . mysqli_connect_error());
}

$usuario = isset($_POST['usuario']) ? $_POST['usuario'] : null;
$contraseña = isset($_POST['contraseña']) ? $_POST['contraseña'] : null;

$response = array();

if ($usuario && $contraseña) {
    //a Realiza una consulta para verificar el usuario y contrseña
    $query = "SELECT * FROM usuarios WHERE usuario = '$usuario' AND contraseña = '$contraseña'";
    $result = mysqli_query($conexion, $query);

    if($usuario == 'admin' && $contraseña == '1234'){
        $response['status'] = 'admin';
        
        
    }
    elseif ($result && mysqli_num_rows($result) > 0) {
        // Usuario y contraseña válidos
        $response['status'] = 'true';
    } else {
        // Usuario o contraseña inválidos
        $response['status'] = 'false';
    }
} else {
    $response['status'] = 'Faltan datos de usuario o contraseña';
}

mysqli_close($conexion);

// Enviar la respuesta como JSON
header('Content-Type: application/json');
echo json_encode($response);
?>
