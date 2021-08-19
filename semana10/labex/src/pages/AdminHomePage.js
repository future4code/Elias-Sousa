import {BrowseRouter, Switch, Route, useHistory} from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { useEffect } from "react";
import { useState } from "react";
import React from "react";



const RestrictAccess=()=>{


    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem("token");
    
        if (token === null) {
          console.log("Não está logado!!!");
          history.push("/login");
        }
      }, []);
    };


    



export const AdminHomePage =()=>{

    RestrictAccess();



    const [accessTrip,SetAccessTrip] = useState([]) // lista para o admin



    const viagens = accessTrip.map((info) =>
    <div>
    <div><label>NOME:</label><li>{info.name}</li></div>
    </div>
  );


  useEffect(() => { // Marina essa axios é a mesma que aquela da lista de viagens que o usuário tem acesso, só que não vejo ela 
    const token = localStorage.getItem("token");
    axios
      .get( 
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trips",
        
      )
      .then((response) => {
        console.log("Deu Certo", response.data);
        SetAccessTrip(response.data.trips)
      })
      .catch((error) => {
        console.log("Deu erro: ", error);
      });
  }, []);


    

    return(

       

        <div>
            
    <div>Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas</div>
            {/* direcionar p detailed ao clicar* - arrumar jeito de passar o id - na outra pag tnm terá o decide candidate*/}
    <div></div>
    {viagens}
    </div>
    );
}