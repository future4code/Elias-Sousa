import {useHistory} from "react-router-dom";
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


    
    const AdminTripCards = styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
    background-color: lightgray;
    width: 630px;
    height: 40px;
    padding: 15px;
    margin: 15px;
    flex-direction: column;
    border-radius: 15px;
    
    li{
        list-style:none;
        margin: 5px;
    }
    
    
    div{
        display: flex;
        flex-direction:row ;
        align-items: center;
        justify-content: space-around;
    }


    :hover{
      cursor:pointer;
      background-color: gray;
    }

    button{
      cursor:pointer;
      
    }

    button:hover{
      background-color:red;
    }
    
    `;




export const AdminHomePage =()=>{

  const [id,setId] = useState("")
  const history = useHistory();

  const direcionaPagDetalhes=(info)=>{ // função que direciona para pag de detalhes
    history.push("/admin/trips/id");
    setId(info);
    
  }


  const onClickDeletarViagem =(key)=>{ 
    const token = localStorage.getItem("token");
    
    

    axios 
    .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trips/${key}`,
    {
    headers: {
      auth: token
    }
  }
    ) .then((response) => {
      alert("Viagem Deletada com Sucesso");
    })
    .catch((error) => {
      alert("Não foi possível deletar essa viagem ");
    });
    
  };



  

    RestrictAccess();



    const [accessTrip,SetAccessTrip] = useState([]) // lista para o admin

    
    
    
    
    const viagens = accessTrip.map( (info) =>
    
    <AdminTripCards  key={info.id}  >  
    
    <div>
      <label>NOME:</label><li> {info.name}</li>

       <div>

       <button onClick={()=>direcionaPagDetalhes(info.id)}>Detalhes</button>
         
         <button onClick={()=>{onClickDeletarViagem(info.id)}}  >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
      <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
      </svg>
      </button>
      
      </div>

      </div>
    </AdminTripCards>
    
  );


  useEffect(() => { //carrega lista 
    const token = localStorage.getItem("token");
    axios
      .get( 
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trips",
        
      )
      .then((response) => {
        //console.log(response.data)
        SetAccessTrip(response.data.trips)
      })
      .catch((error) => {
        console.log("Deu erro Lista de viagem para usua´rio deu errado: ", error);
      });
  }, [accessTrip]); //atualiza a lista toda vez que um item é excluido


    return(

      <div>
            
        <div>Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas</div>
              
        
        {viagens}
      </div>
    );
}