import {BrowseRouter, Switch, Route, useHistory} from "react-router-dom";
import styled from "styled-components";
import React from "react";




const AlignStyleContent = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;

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

export const HomePage =()=>{
    

    const history = useHistory()

    const GotoListTripPage = () =>{
        history.push("/trips/list")
    }

    const GotoAdminHomePage = () =>{
        history.push("/admin/trips/list")
    }

    return(
        <AlignStyleContent>
    <div>Para o usuário escolher entre Área Administrativa e Lista de Viagens</div>
    <div><button onClick={GotoListTripPage}>Voltar para lista de Viagens</button>

    <button onClick={GotoAdminHomePage}>Voltar para área administrativa</button></div>
    </AlignStyleContent>
    );
}