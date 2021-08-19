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


export const TripDetailsPage =()=>{


    RestrictAccess();

    useEffect(() => {
        const token = localStorage.getItem("token");
        axios
          .get(
            "https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trip/NoIFVcOiSgTKTIPVZwXS",
            {
              headers: {
                auth: token
              }
            }
          )
          .then((response) => {
            console.log("Deu certo", response.data);
          })
          .catch((error) => {
            console.log("Deu erro: ", error.response);
          });
      }, []);
    


    return(
        <div>
    <div>Para o administrador ver o detalhe de uma viagem específica, bem como os candidatos que aplicaram para ela</div>
    
    </div>
    );
}