<?php

require "../conectorBD/connect.php";

$nome = $_POST["nome"];
$email = $_POST["email"];
$senha = $_POST["senha"];
$sexo = $_POST["sexo"];
$telefone = $_POST["telefone"];
$dtnasc = $_POST["nascimento"];
$tipo = $_POST["tipo"];


//Carrega a imagem e salva no diretório

if ($_FILES ["avatar"] ["name"]) { //testa se foi enviado um arquivo
    $dir = "../assets/avatar"; // define o caminho onde a imagem será salva
    $tmpName = $_FILES ["avatar"] ["tmp_name"]; // recebe o arquivo
    $name = $_FILES ["avatar"] ["name"]; //recebe o nome do arquivo(imagem)

    //caso o usuario coloque vários pontos(nome.nome.esse.jpg) - para o php não confundir com extensão fazemos o seguinte
    $separa = explode(".",$name); //trata cada parte entre pontos como parte individual
    $separa = array_reverse($separa); //inverte os elementos, será considerado do final para o começo
    $extensao = $separa[0]; //irá pegar o elemetento do ponto 0 , que é a extensão que fica no final do nome do arquivo


    $avatar = $email . "." . $extensao; //salva email.extensao como nome da imagem carregada
    $avatar = strtolower($avatar); // converte tudo para minúsculo

    move_uploaded_file ($tmpName, $dir . $avatar); // joga o arquivo pro diretório

} else{
    $avatar = "Sem Avatar"; // salva a descricao "sem avatar no banco caso o usuário não carregue imagem
}

//Salvar no Banco
$sql = "INSERT INTO usuario (nome,email,sexo,telefone,senha,dtnasc,tipo,avatar) 
VALUES ('$nome','$email','$sexo','$telefone','$senha','$dtnasc','$tipo','$avatar')";

//Testando Salvamento no Banco

if (mysqli_query($connect,$sql)){

    //colocar bootstrap de mensagem (alert que fecha)
    echo
    '<div class="alert alert-success alert-dismissible fade show" role="alert">' .
  '<strong>Dados Salvos Com Sucesso!</strong>' .
  '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>' .
'</div>';

include_once "formulario.html"; // recarrega a pagina principal do formulario para novo registro


} else {
    echo
    '<div class="alert alert-danger alert-dismissible fade show" role="alert">' .
     '<strong>Não Foi Possível Cadastrar o Usuário</strong>' .
      mysqli_error($connect) .
     '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>' .
     '</div>';

include_once "formulario.html"; // recarrega a pagina principal do formulario para novo registro

}

/*a pagina principal (formulário) é sempre chamado para que o usuário sempre se mantenha naquela página ... 
as tratativas dos dados são feitas sem necessidade de carregar está página (recebe.php)*/

mysqli_close($connect);

?>