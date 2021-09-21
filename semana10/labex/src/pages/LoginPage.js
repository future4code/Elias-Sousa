import {useHistory} from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { useState } from "react";
import React from "react";



const StyleLogin = styled.div` // estilizando o login
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

input{
    width: 400px;
    margin:5px;
}


button{
    background-color: transparent;
    height: 35px;
    margin:5px;
    cursor: pointer;

    :hover{
        background-color:lightgray;
    }
}
`;

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


    return(

        <StyleLogin>

        <div>Para fazermos login como administrador</div>
        <div><input onChange={onChangeGuardaEmail}  value={email} placeholder="Seu email" /></div>
        <div><input onChange={onChangeGuardaSenha} value={password}  placeholder="Sua senha" /></div>

        <div><button onClick={Login}>Fazer Login</button></div>

        </StyleLogin>

    
    );
}


