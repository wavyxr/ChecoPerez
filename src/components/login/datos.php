<?php
$usuario = isset($_POST['usuario']) ? $_POST['usuario'] : null;
$contraseña = isset($_POST['contraseña']) ? $_POST['contraseña'] : null;

try {
    $conexion = new PDO("mysql:host=localhost;port=3306;dbname=usuario", "root", "");
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);

    // Configura el encabezado Content-Type como JSON
    header('Content-Type: application/json');

    // Crea una respuesta en formato JSON
    $response = array('message' => 'Conectado correctamente');
    echo json_encode($response);
}
catch (PDOException $error) {
    echo $error->getMessage();
    die();
}
?>
