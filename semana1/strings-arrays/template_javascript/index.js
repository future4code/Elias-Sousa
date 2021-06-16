//Exercícios de interpretação de código

/* 1)

let array
console.log('a. ', undefined)

array = null
console.log('b. ', null)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', 11)

let i = 0
console.log('d. ', 0)

array[i+1] = 19
console.log('e. ', 19)

const valor = array[i+6]
console.log('f. ', i+6)

*/


/* 2)

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?
console.log(SUBI NUM ÔNIBUS EM MIRROCOS)

*/



//Exercícios de escrita de código

// 1)

const nomeDoUsuario = prompt("Insira seu nome")
const emailDoUsuario = prompt("Insira seu email")

console.log("O e-mail", emailDoUsuario , " foi cadastrado com sucesso. Seja bem-vinda(o),", nomeDoUsuario,"!")

// 2)

const comidas = ["feijoada","strogonofe","macarronada","baiaoDeDois","cuscuz"]

console.log(comidas)
console.log("Essas são as minhas comidas preferidas: ")
console.log(comidas[0])
console.log(comidas[1])
console.log(comidas[2])
console.log(comidas[3])
console.log(comidas[4])

const comidaPreferida = prompt("Qual sua comida preferida?")


const novoArray = [comidas[0],comidaPreferida,comidas[2],comidas[3],comidas[4]]
console.log(novoArray)

//3

let listaDeTarefas =[]
const primeiraTarefa = prompt("Qual sua primeira tarefa do dia?")
listaDeTarefas.push(primeiraTarefa)

const segundaTarefa = prompt("Qual sua segunda tarefa do dia?")
listaDeTarefas.push(segundaTarefa)

const terceiraTarefa = prompt("Qual sua terceira tarefa do dia?")
listaDeTarefas.push(terceiraTarefa)

console.log(listaDeTarefas)

const removerTarefa = Number(prompt("Digite o número da tarefa que você já realizou : 1 , 2 ou 3 "))-1 //converte para posição no array
listaDeTarefas.splice(removerTarefa, 1) //quantidade de itens a serem apagados, apartir da posição
console.log(listaDeTarefas)



//DESAFIOS

//1
const recebaFrase = prompt("Digite uma frase!")
const elementosFrase = recebaFrase.split(" ");//o que tá entre aspas indica o divisor entre os elementos, no caso o espaço , observe que existe espaço entre as aspas
console.log(elementosFrase)

const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]


//2

const indice = [];
const palavra = 'Abacaxi';
let idx = frutas.indexOf(palavra);
while (idx != -1) {
  indice.push(idx);
  idx = frutas.indexOf(palavra, idx + 1);
}
console.log("o indice da palavra está na posição",indice)
console.log("o indice possui",palavra.length, "elemento(s)")






