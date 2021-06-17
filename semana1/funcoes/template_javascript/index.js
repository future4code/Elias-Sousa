//Exercícios de interpretação de código

/* 1)

function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2)) -> Será impresso 10  ((variavel=2)*5)
console.log(minhaFuncao(10)) -> Será impresso 50  ((variavel=10)*5)

-------------------------------->

b)  Se fosse retirado os dois console.log e simplesmente invocado a função minhaFuncao(2) e minhaFuncao(10)
não apareceria nada no console , pois somente invocou a função passando os parametros,
porém não imprimiu de fato no console para verificarmos os resultados do processo


function minhaFuncao(variavel) {        //variavel recebe os valores dos parametros de invocação da função e definição dos dados que esta receberá 
	return variavel * 5                 // multiplica o valor que a variável recebeu por 5 
}

minhaFuncao(2)                  // passa para a variavel da função o dado que está receberá , ou seja, valerá 2
minhaFuncao(10)                 // passa para a variavel da função o dado que está receberá , ou seja, valerá 10

sem o console.log não podemos ver o resultado de cada processo das evocações de função e envio dos parametros.
por essa razão não aparecerá nada


*/




/* 2)

let textoDoUsuario = prompt("Insira um texto");             // recebe um texto do usuário e guarda na variavel 'textoDoUsuario'

const outraFuncao = function(texto) {                       // funcao que aguarda parametros para a variavel texto (que será repassado pela 'outraFuncao')
	return texto.toLowerCase().includes("cenoura")          // converte todo o texto para minusculo e verifica se existe a palavra "cenoura" , retornando true ou false
}

const resposta = outraFuncao(textoDoUsuario)                // guarda em uma variável , a função , só que passando o 'textoDoUsuario' , para a variável texto da mesma função
console.log(resposta)                                      // imprime no console o resultado da função atrelada na outra função cujos resultados foram guardados em uma variável


// O texto convertido não retorna , a não ser o resultado de true ou false , isso ocorre porque  variaveis de escopo global não conseguem extrair informações do escopo local, no caso, somente o true ou false são retornados

SAÍDAS NO CONSOLE PARA OS SEGUINTES CASOS:
i.   Eu gosto de cenoura  ---------> - True
ii.  CENOURA é bom pra vista ---------> - True
iii. Cenouras crescem na terra ---------> True
*/



//Exercícios de escrita de código


//1)

function minhaFuncao() {
    console.log("Eu sou Elias, tenho 23 anos, moro em São Paulo e sou estudante.")
}

minhaFuncao()


//2)
//a

const primNum = Number(prompt("Digite um número"))
const segunNum = Number(prompt("Digite um número"))


function soma2Numeros(num1,num2) {
    const soma = num1 + num2
    return soma 
}

const parametros = soma2Numeros(primNum,segunNum)

console.log("A soma dos números é :",parametros)

//b

function compara2Numeros(num1,num2) {
    const compara = num1 >= num2
    return compara
}

const parametrosCompara = compara2Numeros(primNum,segunNum)

console.log("O primeiro número é maior que o segundo ? :", parametrosCompara)

//c

function parOuImpar(num1,num2) {
    const parImpar = num1 / 2 === 0
    return parImpar
}

const parametrosParImpar = parOuImpar(primNum,null)

console.log("O primeiro número digitado é par? :", parametrosParImpar)



//d)

const mensagem = (prompt("Digite uma mensagem"))

function funcaoMensagem(mensagem) {
    return mensagem.toUpperCase()
}

const parametrosMensagem = funcaoMensagem(mensagem)

console.log("a mensagem :", parametrosMensagem , "possui", mensagem.length, "de tamanho")

//3)

//const primNum = Number(prompt("Insira um novo Número"))
//const segunNum = Number(prompt("Insira outro"))


//function doisNumeros(num1,num2) {
   //const div =
    //const sub = num1 - num2
    //return parImpar
}

//const parametrosParImpar = parOuImpar(primNum,null)

//console.log("O primeiro número digitado é par? :", parametrosParImpar)