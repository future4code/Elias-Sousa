function calculaNota(ex, p1, p2) {
 
    let media = ((p1*2)+(p2*3)+(ex*1)) / (2+3+1)
    let mediaF = media.toFixed(1) //media formatada
    
    if (mediaF >=9){
      let conceito = "A"
      return conceito
    } else if (mediaF <9 && mediaF >= 7.5 ){
      let conceito = "B"
      return conceito
    } else if (mediaF <7.5 && mediaF >= 6){
      let conceito = "C"
      return conceito
    }else if (mediaF <6){
      let conceito = "D"
      return conceito
    }else{console.log("ops! algo deu errado")}
  }