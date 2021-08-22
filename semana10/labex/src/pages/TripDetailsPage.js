import { useHistory} from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { useEffect } from "react";
import { useState } from "react";
import React from "react";


const DetailedItem = styled.div` // Estilizando card de item detalhado 
background-color: pink;
width: 300px;
height:300px;
border-radius: 20px;
display: flex;
flex-direction:column;
align-items:center;
justify-content:center;

label{
  margin-right:5px;
  color:ghostwhite;
}
`;


const DetailedCenter = styled.div` // alinha o card de detalhe para o centro
display: flex;
justify-content: center;
margin-top: 15px;
`;


  const RestrictAccess=()=>{ // Condição que restringe o acesso do usuário a pagina de detalhe da viagem e direciona para um login

    const history = useHistory();

      useEffect(() => {
          const token = localStorage.getItem("token");
      
          if (token === null) {
            console.log("Não está logado!!!");
            history.push("/login");
          }
        }, []);
  };


  export const TripDetailsPage =({id})=>{

    const [detailed,setDetailed] = useState([])
    const [teste,setTeste]=useState("E1MpaACkUFm6Qs36GwdX") //Id feito manualmente para teste
    


    const nome = detailed[0]; // jogo os itens e ordeno a exibição
    const descricao = detailed[1];
    const planeta = detailed[2];
    const duracao = detailed[3];
    const data = detailed[4];


 

    RestrictAccess(); // Carregando no return para aplicar o redirecionamento de acesso restrito

    useEffect(() => { 

        const token = localStorage.getItem("token");
        axios
          .get(
            `https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trip/${teste}`,
            {
              headers: {
                auth: token
              }
            }
          )
          .then((response) => {
            console.log("Deu certo", response.data.trip);
  
            const detalhes = [] // em caso de sucesso na requisição de viagem detalhada , inserir no estado essas informaçoes

            detalhes.push(response.data.trip.name)
            detalhes.push(response.data.trip.description)
            detalhes.push(response.data.trip.planet)
            detalhes.push(response.data.trip.durationInDays)
            detalhes.push(response.data.trip.date)

            setDetailed(detalhes);
          })
          .catch((error) => {
            console.log("Deu erro: ", error.response);
          });
    }, []);


    return(
        <div>
    <div>Para o administrador ver o detalhe de uma viagem específica, bem como os candidatos que aplicaram para ela</div>
    
    <DetailedCenter>

    <DetailedItem>
      <h2>DETALHES</h2>
      
      
    <div><label>NOME :</label>{nome}</div>
    <div><label>DESCRIÇÃO :</label>{descricao}</div>
    <div><label>PLANETA :</label>{planeta}</div>
    <div><label>DURAÇÃO :</label>{duracao}</div>
    <div><label>DATA :</label>{data}</div>
    </DetailedItem>

    </DetailedCenter>
    </div>
    );
  }



