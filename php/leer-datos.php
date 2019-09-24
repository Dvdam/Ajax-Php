<?php

error_reporting(0);
header('Content-type: application/json; charset=utf-8');

$user = 'arpadata';
$password = 'prueba123';
$dbname = 'ajax';

$conexion = new mysqli('localhost', $user, $password, $dbname);

if($conexion->connect_errno){
	$respuesta = [
		'error' => true
	];
} else {
	$conexion->set_charset("utf8");
	$statement = $conexion->prepare("SELECT * FROM usuarios");
	$statement->execute();
	$resultados = $statement->get_result();
	
	$respuesta = [];
	
	while($fila = $resultados->fetch_assoc()){
		$usuario = [
			'id' 		=> $fila['ID'],
			'nombre' 	=> $fila['nombre'],
			'edad'		=> $fila['edad'],
			'pais'		=> $fila['pais'],
			'correo'	=> $fila['correo']
		];

		// Array_push agrega un array dentro de un array, los parametros son: 1: array al que queremos argregar el nuevo array, 2: el array que queremos agregar
		array_push($respuesta, $usuario);
	}
}

echo json_encode($respuesta);