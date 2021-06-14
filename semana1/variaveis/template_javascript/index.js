//Exercícios de interpretação de código

/*
1 ) 
console.log(10)
console.log(10, 5) 
*/


// 2) - console.log(10, 10, 10)


/*
3 )
let horasTrabalho = prompt("Quantas horas você trabalha por dia?")
let diaria = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${horasTrabalho/diaria} por hora`)
 */



//Exercícios de escrita de código

//1)

let nome
let idade 

console.log(nome,idade)
console.log("tipo da variável nome :", typeof nome)
console.log("tipo da variável idade :", typeof idade)

/* nas primeiras declarações não imprimiu nada ,pois não há
valor atribuido , então seus tipos também serão indefinidos */


const meuNome = prompt("Qual é o seu nome?")
const minhaIdade = Number(prompt("Qual é sua idade?"))
console.log('Tipo da variável nome:', typeof meuNome)
console.log('Tipo da variável idade:', typeof minhaIdade)

/*se eu não atribuir o tipo no prompt, por padrão lerá como string,
observe que no nome coloquei um prompt sem manipular o tipo,
e por padrão será string, exatamente o dado que esperamos. Para
a idada configuramos como number. por essa razão imprimiu
como vemos no console log
*/

//Quando há entradas de valor, como acima , já é possível dizer o tipo. 

console.log("Olá",meuNome,"você tem", minhaIdade)

//2)

let roupa = prompt("Você está usando roupa azul?")
let amaLabenu = prompt("Você ama a Labenu?")
let notebook = prompt("você está usando seu notebook?")


console.log("Você está usando roupa azul?",roupa)
console.log("Você ama a Labenu?",amaLabenu)
console.log("você está usando seu notebook?",notebook)

//3)

let a = 10
let b = 25

let incialA =  a
let incialB =  b


// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", incialB) // O novo valor de a é 25
console.log("O novo valor de b é", incialA) // O novo valor de b é 10


//DESAFIO


const primeiroNum = Number(prompt("Informe o primeiro número"))
const segundoNum = Number(prompt("Informe o segundo número"))


console.log("O primeiro número somado ao segundo número resulta em", primeiroNum+segundoNum) 
console.log("O primeiro número multiplicado pelo segundo número resulta em", primeiroNum*segundoNum) 

