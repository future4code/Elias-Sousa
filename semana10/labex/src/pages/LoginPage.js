import {BrowseRouter, Switch, Route, useHistory} from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { useEffect } from "react";
import { useState } from "react";
import React from "react";

export const LoginPage =()=>{

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const history = useHistory();


    const onChangeGuardaEmail = (event)=>{
        setEmail(event.target.value);
        }
    
        const onChangeGuardaSenha = (event)=>{
            setPassword(event.target.value);
        }



    const Login = () => {
        console.log(email, password);
        const body ={
            email:email,
            password:password
        };

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/login",body)

        .then((response) => {
            console.log("Deu certo: ", response.data.token);
            localStorage.setItem("token", response.data.token);
            history.push("/admin/trips/list"); //Depois do login acessará a pag inicial de admin
          })
          .catch((error) => {
            console.log("Deu errado: ", error.response);
          });


    };


///

    ////

    
    
    return(

    <div>

        <div>Para fazermos login como administrador</div>
        <label>Email:</label><input onChange={onChangeGuardaEmail}  value={email} placeholder="Seu email" />
        <label>Senha:</label><input onChange={onChangeGuardaSenha} value={password}  placeholder="Sua senha" />

        <div><button onClick={Login}>Fazer Login</button></div>

    </div>

    
    );
}


