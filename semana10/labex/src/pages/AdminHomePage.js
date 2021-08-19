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

    

    return(

       

        <div>
            
    <div>Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas</div>
            {/* direcionar p detailed ao clicar* - arrumar jeito de passar o id - na outra pag tnm terá o decide candidate*/}
    <div></div>
    </div>
    );
}