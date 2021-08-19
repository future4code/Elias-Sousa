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

export const CreateTripPage =()=>{

    RestrictAccess();
    
    useEffect(() => {
        const token = localStorage.getItem("token");
        axios
          .post(
            "https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trips",
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
    <div>Formulário para o administrador criar uma nova viagem</div>
    );
}