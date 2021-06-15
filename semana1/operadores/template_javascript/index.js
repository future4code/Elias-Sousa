//Exercícios de interpretação de código


/* 1)

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", false)

resultado = bool1 && bool2 && bool3 
console.log("b. ", false) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", false)

console.log("d. ", typeof boolean)


*/



/* 2)  

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)


O resultado impresso: Será dado o resultado da concatenação dos 2 números informados

O problema/solução: no caso acima a soma será uma simples concatenação de strings , pois por padrão o prompt lê
qualquer informação como string , para resolver isso , deve-se envolver o prompt no Number(prompt())
para fazer a conversão , assim em vez de concatenar somará adequadamente

*/


/*
 3)  


let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)


*/


//Exercícios de escrita de código

//1)

let idade = Number(prompt("Qual a sua idade?"))
let idadeAmigo = Number(prompt("Qual a idade do seu melhor amigo?"))

console.log("Sua idade é maior do que a do seu melhor amigo?",idade>idadeAmigo)
console.log(idade-idadeAmigo)

//2)
let par = Number(prompt("Insira um número par"))
console.log(par%2)

/* o padrão acima não traz o resultado da divisão, mas se sobrou um resultado que não fosse dividido por 2 ,
 no caso acima como é par , resulta 0 - como é par sempre há um resultado exato, logo sempre o resto
 da divisão será 0 */

/* Se o usuário digitar o número impar restará o resultado que não é dividio por 2 que é o resto da divisão que não é dividido por 2,
valores menores que 2 não serão divididos,sendo este o resultado */

// 3)

let suaIdade = Number(prompt("Qual a sua idade?"))
let idadeMeses = suaIdade*12
let idadeDias = suaIdade*365
let idadeHoras = (24*365)*suaIdade

console.log("A sua idade em meses é :", idadeMeses , " meses")
console.log("A sua idade em dias é :", idadeDias , " dias")
console.log("A sua idade em horas é :", idadeHoras , " horas")


// 4)
let numPrimeiro = Number(prompt("Insira um número"))
let numSegundo = Number(prompt("Insira um segundo número"))
let primeiroMaior = numPrimeiro>numSegundo
let igualdadeP = numPrimeiro === numSegundo
let divisivelSegundo = numPrimeiro % numSegundo  === 0 
let divisivelPrimeiro = numSegundo%numPrimeiro === 0




console.log("O primeiro numero é maior que segundo? :",primeiroMaior) 
console.log("O primeiro numero é igual ao segundo? :",igualdadeP) 
console.log("O primeiro numero é divisível pelo segundo? :",divisivelSegundo)
console.log("O segundo numero é divisível pelo primeiro? :",divisivelPrimeiro)



