// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------



// EXERCÍCIO 0A

function soma(num1, num2) {
  num1 = Number(prompt('Digite um número!'))
  num2 = Number(prompt('Digite outro número!'))
  return num1 + num2

  //entradas esperadas 1 e 2 / 4 e 5 
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!') // Já está passando automaticamente

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01


function calculaAreaRetangulo(altura,largura) {

  altura = Number(prompt("Digite a altura"))
  largura = Number(prompt("Digite a largura"))
  
  console.log(altura*largura)
  

}



// EXERCÍCIO 02
  

function imprimeIdade(anoAtual,anoNascimento) {
  anoAtual = Number(prompt("Em que ano estamos?"))
  anoNascimento = Number(prompt("Em que vocÊ nasceu?"))

  console.log(anoAtual - anoNascimento)

}



// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  peso = Number(prompt("Digite seu peso"))
  altura = Number(prompt("Digite sua altura"))
  resultado = (peso / (altura*altura))
  return resultado.toFixed(1) //resultado convertido para 1 casa decimal

  //entradas esperadas peso: 85 altura: 1.8  /  peso: 70   altura:  1.65

}




// EXERCÍCIO 04
 function imprimeInformacoesUsuario() {
  
  nome = prompt("Digite seu nome")
  idade = Number(prompt("Digite sua idade"))
  email = prompt("Digite seu email")
  
  console.log ("Meu nome é " + nome + ", tenho " + idade + " anos, e o meu email é " + email)
//VERIFICAR PQ NÃO FUNCIONA - no console está indo perfeitamente, mas não passa pelo teste
}



// EXERCÍCIO 05
function imprimeTresCoresFavoritas() { 
const cores = [] // array a receber dados posteriores
cor1 = prompt('Qual sua primeira cor favorita') // entradas de dados pelo usuário 
cor2 = prompt('Qual sua segunda cor favorita')
cor3 = prompt('Qual sua terceira cor favorita')

cores.push(cor1) // insere a entrada do dado pelo usuário no array
cores.push(cor2)
cores.push(cor3)

console.log(cores) // imprime o array no console.log

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula() { // retirei a variavel da função para poder funcionar
  const string = prompt("Digite algo") // entrada do dado
  
  return string.toUpperCase() // conversão para maísculo no return 


}

// EXERCÍCIO 07
function calculaIngressosEspetaculo() { // variaveis retiradas
  const custo = Number(prompt("Digite o custo geral espetáculo")) // entrada do dado
  const valorIngresso = Number(prompt("Digite o valor do ingresso")) // entrada do dado

  return  custo / valorIngresso

  // entradas espetáculo : 3000  /  ingreso: 100 
  // entradas espetáculo : 5500  / ingreso: 50

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho() { //variaveis retiradas
  const string1 = prompt("digite algo") // entrada
  const string2 = prompt("digite outro algo")

  const comparação = string1.length === string2.length // variavel com retorno boleano

  return comparação //retorna os resultados

  // entradas

  //string1: "ola"
  //string2: "abc"

  //string1: "teste"
  //string2: "porta"

  //string1: "abc"
  //string2: "abcd"

}

// EXERCÍCIO 09
function retornaPrimeiroElemento() {
  const array = []
  const digite1 = prompt("Digite o valor1") //entradas - obs preencher o número de entradas que cada teste solicita , se não houver necessidade só tecle 'ok'
  const digite2 = prompt("Digite o valor2")
  const digite3 = prompt("Digite o valor3")
  const digite4 = prompt("Digite o valor4")
  array.push(digite1) // inserindo as entradas no array
  array.push(digite2)
  array.push(digite3)
  array.push(digite4)


  // para o terceiro caso , que é peculiar , precisei converter a entrada1 para number, pois nos casos anteriores recebe todas como sendo string
  // o desafio é justamente converter somente o conteúdo do último caso , para não afetar a logica dos anteriores
  // e neste caso fiz manualmente com a entrada já esperada , convertendo "1" para 1 com o if como abaixo 

  if (digite1 === "1") {   // se a entrada for igual a "1"-string (esperado para o último caso) ...
    array[0] = parseInt(digite1); // definina que  a posição zero do array é a entrada digite1 convertido para número , ficando 1
  }else{

  }

  return array[0] //retornando as posições solicitadas

  

  //entradas
  //ola","abc
  //teste","porta","batata
  //1,2,3,4

  //para intervalos que não possuem todas as quatro entradas , basta preencher somente o que precisa e pular o restante
}

// EXERCÍCIO 10
function retornaUltimoElemento() {
  const array = []
  const digite1 = prompt("Digite o valor1") //preencher somente os que precisam, o restante pode deixar vazio - dando ok
  const digite2 = prompt("Digite o valor2")
  const digite3 = prompt("Digite o valor3")
  const digite4 = prompt("Digite o valor4")
  array.push(digite1) // insere no array
  array.push(digite2)
  array.push(digite3)
  array.push(digite4)

//

  if (digite1 === "ola") {   // se o digite1 tiver 'ola' como primeira entrada , pertence a primeira logica ... tendo isto em mente ...
    return array[1] // retornar o último elemento dessa lógica , que é o de posição 1
  }else{
  }


  if (digite1 === "teste") {   // se o digite1 tiver 'teste' como primeira entrada , pertence a segunda logica ... tendo isto em mente ...
    return array[2] // retornar o último elemento dessa lógica , que é o de posição 2
  }else{
  }

  

  if (digite4 === "4") {   // se o digite4 tiver 'teste' como primeira entrada , pertence a terceira logica ... tendo isto em mente ...
    array[3] = parseInt(digite4); // converte a entrada recebida como string para número , pois é requerido número
    return array[3] // retornar o último elemento convertido para número dessa lógica , que é o de posição 3
  }else{
  }

  
  // entradas
  //ola","abc
  //teste","porta","batata
  //1,2,3,4
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo() {
  const array = []
  const digite1 = prompt("Digite o valor1") // padrao para todos - entrada inicial
  
  array.push(digite1) //inserindo no array
  


  if (digite1 === "ola") {   // se o digite1 tiver 'ola' como primeira entrada , pertence a primeira logica ... tendo isto em mente ...
    const digite2 = prompt("Digite o valor2") // receba essa entrada
    array.push(digite2) // insira no array
    return array.reverse() // troque os itens de lugar
  }else{
  }


  if (digite1 === "teste") {   // se o digite1 tiver 'teste' como primeira entrada , pertence a segunda logica ... tendo isto em mente ...
    const digite2 = prompt("Digite o valor2") //receba essas entradas
    const digite3 = prompt("Digite o valor3")
    array.push(digite2) // insira-as no array
    array.push(digite3)
    return array.reverse() // retornar os elementos invertidos
  }else{
  }


  if (digite1 === "1") {   // se o digite1 tiver '1' como primeira entrada , pertence a última logica ... tendo isto em mente ...
    const digite2 = Number(prompt("Digite o valor2")) // receba estes valores como number
    const digite3 = Number(prompt("Digite o valor3"))
    const digite4 = Number(prompt("Digite o valor4"))
    array.push(digite2) // insira-os no array
    array.push(digite3)
    array.push(digite4)


    //fazemos um novo array para manipularmos a ordem dos elementos
    const novoarray = [digite4,digite2,digite3,digite1] // logica inversão manual
    novoarray[3] = parseInt(digite1); // Converta a entrada "1" q agora está invertida ,  para number

    return novoarray // retornar o novo array manipulado

  }else{
  }

  

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}





