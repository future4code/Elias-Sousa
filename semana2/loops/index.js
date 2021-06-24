//Exercícios de interpretação de código

/* 1)

let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)

R= O codigo acima está usando a estrutura de um contador ,
(laço de repetição for) , para somar valores na variavel valor apartir da
 variavel (i), usada como instrumento de referência ,, esta por sua vez recebe +1 de valor a cada processo 
 e soma na variável valor. acabando-se o número determinado que 
 foi definido para as repetições , o laçõ encerra , retornando no console log 
 o resultado final dessas inserções para cada rodada.

*/ 

//----------------------------

/* 2)

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

a) Será impresso no console log todos os números maiores que 18 que fazem parte do array lista

b) Sim, de uma maneira geral ,no codigo acima, se eu colocar a variável de parametro do for of (numero)
no console log , ela imprimirá todos os itens do array vez por vez. então a questão é como interceptar
esses resultados individuais para a fazer uso de cada um deles.
A resposta é : , chamando o (array[posição]) com a posição do item que queremos, simples assim,
e para usar fora do escopo,basta associar essa chamada a uma nova variável a ser criada no lado de fora
(const variavel = lista[2])

assim:

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  
		//console.log(lista[2])
	
}

const variavel = lista[2] //coloque aqui qualquer posição que deseja percorrer
console.log(variavel)

*/ 

//-----------------------------

/* 3)


const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))       //4
let quantidadeAtual = 0                                                         // valor mutável definido 
while(quantidadeAtual < quantidadeTotal){          //executa esse bloco de cod visto que a qtdatual < qtdtotal
  let linha = ""                                    // linha equivale a um espaço vazio do tipo string
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){                  //asterisco inicia em valor zero , enquanto for menor 1 , adiciona +1 no asterisco
    linha += "*"                                    // então soma a cada linha um '*'
  }
  console.log(linha)                                // imprimirá os asteriscos adicionados ***
  quantidadeAtual++                                 // valor da linha passa a valer qtdAtual+1
}

R = o codigo acima imprimiria na tela 3 astericos na linha ***

*/ 

//----------------------------

//Exercícios de escrita de código

//1)

const estimacao = Number(prompt("quantos bichinhos de estimação você tem?"))
const nomes = [] // array dos bichinhos de estimação , que começa vazio


if (estimacao > 0) {  // se o usuário digitar algo maior q 0, a lógica já passa a valer
    let num = 1; //argumento inicial para tratamento do número do animal de estimação 1,2,3...
    for (let i=1; i <= estimacao; i++ ){
    const nome = prompt("Qual o nome do animal de estimação número "+num+" ?") // pergunta e trataemnto para o animal
    nomes.push(nome) // insere no array a entrada colhida
    num =num+1; // a cada processamento , tratar o animal como sendo de número posterior do argumento inicial
    
    }

}else{ // caso digite zero ou coloque algo incoerente , cairá nessa tratativa
    console.log("Que pena! Você pode adotar um pet!")
}


if (estimacao !=0){  // se o dono tiver algum animal de estimação retornará um array com os nomes
    console.log("os nomes de seus pets são:", nomes)

}else{

}


//2)

const arrayOriginal = [11,23,38,40,53]

//imprimindo os itens das posições do array
for(let posicao of arrayOriginal){
    console.log(posicao)

}


// imprimido os valores divididos por 10
for(let posicao of arrayOriginal){
    console.log(posicao/10)

}


// Escreva um programa que crie um novo array contendo, 
//somente, os números pares do array original e imprima esse novo array

let novoArray = arrayOriginal // eu tinha usado um objeto e uma cópia desse array, porém não,simplifiquei e funcionou


    let i = 0

    if(novoArray[0]%2 !==0){ // aqui é uma gambiarra, não sei pq o codigo abaixo não excluiu a posicao inicial impar
        novoArray.splice(i,1)

    }else{

    }


        while(i <= novoArray.length){

        let valor = novoArray[i] //percorrer cada posição do array 

        if(valor % 2 !==0){
            novoArray.splice(i,1) // remove a posição indicada
        }else{
        
        }

            i++
        }

    


console.log(novoArray)