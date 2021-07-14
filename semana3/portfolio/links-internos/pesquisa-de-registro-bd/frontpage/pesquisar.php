<!DOCTYPE html>
    <html lang="pt-br">
        
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
        
            <!-- Bootstrap CSS -->
            <link href="../bootstrap-5.0.0-dist/css/bootstrap.css" rel="stylesheet">
            <script src="../bootstrap-5.0.0-dist/js/bootstrap.js"></script>
        
            <title>Pesquisa de Usuário</title>
        </head>
        
        <body>
        
            <div class="container">


                <div class="pt-2">
                    <div class="card bg-light">
                            <div class="card-header bg-success text-white">
                                <h1>Pesquisa de Usuário</h1>
                            </div>
                        <div class="card-body">

                                <!--Botão de Pesquisa-->
                            <form method="POST" enctype="multipart/form-data">
                            
                                <div class="row g-3">
                                    <div class="col-md">
                                        <input name="nome" type="nome" class="form-control" id="inputtext" placeholder="Digite um nome">
                                    </div>
                                    <div class="col-md">
                                    <button type="submit" class="btn btn-success text-white">Pesquisar</button>
                                    </div>
                                </div>
                           

                                <!--Inserindo Php no html-->

                                <?php

                                    include "../conectorBD/connect.php";

                                    //Comando caso usurario pesquise por um nome
                                    if(isset($_POST['nome'])){ //se usuario pesquisa - pegue o que foi digitado
                                        $nome = $_POST['nome']; // coloque o que foi digitado numa variável


                                        $sql = "SELECT id,nome,email,sexo FROM usuario where nome like '%$nome%'  "; // selecione essas informações no registro que tenha nomes parecidos com a pesquisa feita e guardada na variável $nome
                                        $result = $connect->query($sql); // atribua a variável result as configurações de conexão, onde em sql atriuimos o comando pro b.d

                                        //cabeçalho da tabela
                                        echo "</br>";
                                        echo "<table class='table table-striped table-dark'>
                                            <thead>
                                                <tr>
                                                <th scope='col'>#</th>
                                                <th scope='col'>Nome</th>
                                                <th scope='col'>Email</th>
                                                <th scope='col'>Sexo</th>
                                                </tr>
                                            </thead>


                                            <tbody>"
                                            ;

                                        while($row = $result->fetch_assoc()) { 

                                            echo "
                                            <tr>
                                            <th scope='row'>". $row['id']. "</th>
                                            <td>". $row['nome']. "</td>
                                            <td>". $row['email']. "</td>
                                            <td>". $row['sexo']. "</td>
                                            </tr>";
                                        } 

                                            //fechando tabela
                                            echo"
                                            </tbody>
                                            </table>";

                                    }
                                       
                                    $connect->close();
     
                                ?>

                            </form>
                            <div class="row g-3 pt-3">
                                <div class="col-md">
                                    <a class="btn btn-success text-white float-end" href="../frontpage/formulario.html" role="button">Novo Registro</a>
                                </div>
                            </div>
                
                        </div>
                    </div>
                </div>
            </div>
        
            <!-- jQuery, Popper.js-->
            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
            <script src="../bootstrap/js/bootstrap.bundle.min.js"></script>
        
            
        </body>
        
        </html>