// Exercícios de interpretação de código

/* 1) 

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

---------------->
a) o codigo acima recebe em uma variável uma entrada feita pelo usuário 'respostaDoUsuario'
e na variavel número faz a conversão da variavel 'respostaDoUsuario' para o tipo Number

na estrutura condicional diz que se o resto da divisão do número for 2 então executa a condição do if
imprimindo no console 'passou no teste' , 
caso contrário, imprime no console.log a frase 'não passou no teste'

----------------->

b) Já que o resto da divisão por 2 precisa ser 0 , logo o tipo de número que a frase 'passou no teste' imprime
são números pares , cuja divisão por 2 resulta em 0

----------------->

c) O caso contrário também é automaticamente associado , se o resultado do resto da divisão não
for zero, logo se trata de um número primo, que não são divisiveis por 2 para ter zero como resultado
no resto da divisão.


*/

//------------------------------------------------------------------------------------


/*2

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

a) O código acima recebe o nome de uma fruta , recebe seus respctivos preços para cada case
e o console.log imprime junto aos dados da mensagem , o nome da fruta e seu preço

b) Caso a fruta digitada seja 'Maçã' , a mensagem impressa seria 
console.log("O preço da fruta ", 'Maçã', " é ", "R$ ", 2.25)

c) Se fosse retirado o brake do item Pêra, o case entraria em loop infinito , pois não
há um comando que ordene parar


*/


/*3


const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

a) a primeira linha de código recebe uma entrada do tipo número , pelo usuário

b) Se um usuário digita o número 10. será impresso no  terminal = 'Esse número passou no teste' &
'Essa mensagem é secreta!!!' embora esteja no console global não retornaria

 E se fosse o número -10 não seria impresso nenhum resultado correpondente ao esperado , visto que não 
 foi definido nada para este tipo de situação


 c) Caso o resultado fosse menor que 0  não retornaria nada , pois  nã foi declarado alguma ação para esse caso
 , mas o problema é o console.log global usando
 da variavel declarada num escopo local , tais linhas não se comunicam , resultando um erro no terminal 

*/


//------------------------------------------------------------------------------

// 1)

const idade = Number(prompt('qual a sua idade?'))

if (idade >= 18 ){
    console.log("Você pode dirigir")

}else {
    console.log("Você não pode dirigir.")
}

// 2)

const turno = prompt('qual turno você estuda?  M/(matutino) ou V/(Vespertino) ou N/(Noturno). digite a letra correspondente').toUpperCase()

if (turno === "M" ){
    console.log("Bom dia!")

}else if(turno === "V") {
    console.log("Boa tarde!")
}else if (turno === "N"){
    console.log("Boa Noite!")
}else{
    console.log("ops, não entendi! ... mas bom dia boa tarde boa noite, bora para aula")
}


// 3)
// utilizei da mesma variavel de entrada do exercício anterior
switch (turno) {
    case "M":
        console.log("BOM DIA!")
    break;

    case "V":
        console.log("BOA TARDE!")
    break;

    case "N":
        console.log("BOA NOITE!")
    break;

    default:
        console.log("ops, não entendi! ... mas BOM DIA BOA TARDE BOA NOITE, bora para aula")
    break;
}

// 4)

const genero = prompt('Qual Seu Genero? M/F ?')
const precoIngresso = Number(prompt('Qual o preço do ingresso? obs.Sem centavos'))


if (genero === "M" | genero === "m" & precoIngresso < 15  ){
    console.log("Bom filme!")

}else{
    console.log("Que tal assisir as Branquelas?")
}