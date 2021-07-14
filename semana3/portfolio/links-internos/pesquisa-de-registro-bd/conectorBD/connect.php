<?php


require "../parametrosBD/configBD.php";

$connect = new mysqli ($host,$user,$password,$database); //conexão aos parametros b.d

//Configuração de Charset
$connect->set_charset("utf=8");

if ($connect->connect_error){
    die("Erro de Conexão");
    
}

/*if ($connect){
    echo"Conexão bem sucedida!";
    echo"</br>";
}*/

?>