/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    console.log("Boas vindas ao jogo de Blackjack!")

    const confirm = prompt("Deseja Iniciar um novo Jogo? OK/CANCELAR").toUpperCase()
    const usuario = []
    const computador = []


   //Processamento para a resposta do usuário
   if(confirm === "OK") {

         //lógica para o usuário
      for(let i=0; i<=1; i++){

         const carta = comprarCarta(); 
         usuario.push(carta.valor)
         console.log("Usuário :" ,carta.texto)
      }

         //lógica para o computador
      for(let i=0; i<=1; i++){
         const carta = comprarCarta()
         computador.push(carta.valor)
         console.log("computador :" ,carta.texto)
         
      }

   } else {
      console.log("O jogo acabou")
   }


   //somando as posições do array que receberam os valores - usuario 
   let somaUsuario1 = usuario[0] 
   let somaUsuario2 = usuario[1]
   let somaUsuario = somaUsuario1 + somaUsuario2

   //somando as posições do array que receberam os valores - computador
   let somaComputador1 = computador[0]
   let somaComputador2 = computador[1]
   let somaComputador = somaComputador1 + somaComputador2


   //condição do que aparecer como mensagem final e comparativo de pontuções
   if (somaUsuario > somaComputador){
      console.log("O Usuário ganhou!")
   }else if (somaUsuario < somaComputador){
      console.log("O computador ganhou!")
   }else {
      console.log("Empate!")
   }




      
   