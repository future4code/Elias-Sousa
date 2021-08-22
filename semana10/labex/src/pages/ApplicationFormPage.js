import axios from "axios";
import React from "react";




const SendForm=()=>{

 
    const body ={
        name: "Astrodev",
        age: 20,
        applicationText: "Quero muuuuuuito ir!!!",
        profession: "Chefe",
        country: "Brasil"

    };
    axios
      .post( 
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trips/NoIFVcOiSgTKTIPVZwXS/apply",body
      )
      .then((response) => {
        console.log("Deu Certo", response.data);
        
      })
      .catch((error) => {
        console.log("Deu erro: ", error);
      });
    }

export const ApplicationFormPage =()=>{

    return(
      <div>
    <h2>INSCREVA-SE PARA UMA VIAGEM!</h2>
    
   <div>  
  <select  name="cars" id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
  </select>
  </div> 
    
    <div><input type="text" placeholder="nome" /></div>
   <div> <input type="number" placeholder="idade" /></div>
   <div><input type="text" placeholder="texto de candidatura" /></div>
   <div> <input type="text" placeholder="profissão"/></div>
    
   <div> 
    <select  name="cars" id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
</div> 


    
    <button onClick={SendForm}>ENVIAR</button>
    
    </div>
    );
    
}