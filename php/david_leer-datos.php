
<?php
$usuario = 'arpadata';
$password = 'prueba123';
$dbname = 'ajax';

// try {
//     $conexion = new PDO('mysql:host=localhost;dbname=ajax', $usuario, $password);

// } catch (PDOException $e) {
//     print "¡Error!: " . $e->getMessage() . "<br/>";
//     die();
// }

try {
    $db = "mysql:host=localhost;dbname=$dbname";
    $conexion = new PDO($db, $user, $password);
} catch (PDOException $e){
    echo $e->getMessage();
}
?>
