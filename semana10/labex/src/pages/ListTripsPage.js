import {BrowseRouter, Switch, Route, useHistory} from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { useEffect } from "react";
import { useState } from "react";
import React from "react";






const TripCards = styled.div`
display:flex;
justify-content: center;
align-items:center;
background-color: lightgray;
width: 430px;
height: 200px;
padding: 15px;
margin: 15px;
flex-direction: column;
border-radius: 15px;
box-shadow: 9px 7px 5px rgba(50, 50, 50, 0.77);

li{
    list-style:none;
    margin: 5px;
}


div{
    display: flex;
    flex-direction:row ;
    align-items: center;
}

`;



const UserListPage = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

button{
    background-color: transparent;
    height: 50px;
    margin:5px;
    cursor: pointer;

    :hover{
        background-color:lightgray;
    }
}
`;



export const ListTripsPage =()=>{
    

    const [trips,SetTrips] = useState([])

    const history = useHistory();
    
    const GotoApplicationForm =()=>{
        history.push("/trips/application");
    }

    const GotoHomePage =()=>{
        history.push("/");
    }

    const viagens = trips.map((info) =>
    <TripCards>
    <div><label>NOME:</label><li>{info.name}</li></div>
    <div><label>DESCRIÇÃO:</label><li>{info.description}</li></div>
    <div><label>PLANETA:</label><li>{info.planet}</li></div>
    <div><label>DURAÇÃO:</label><li>{info.durationInDays}</li></div>
    <div><label>DATA:</label><li>{info.date}</li></div>
  </TripCards>
  );




    


    useEffect(() => {
        const token = localStorage.getItem("token");
        axios
          .get( 
            "https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trips",
            
          )
          .then((response) => {
            console.log("Deu Certo", response.data);
            SetTrips(response.data.trips)
          })
          .catch((error) => {
            console.log("Deu erro: ", error);
          });
      }, []);
    

    return(
        <div>
         < UserListPage>
    <div>Para vermos todas as viagens</div>
    
    <div><button onClick={GotoHomePage}>Voltar</button> <button onClick={GotoApplicationForm}>Inscreva-se</button></div>
    </UserListPage>
    {viagens}
    </div>
    );
}



