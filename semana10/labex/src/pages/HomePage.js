import {BrowseRouter, Switch, Route, useHistory} from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { useEffect } from "react";
import { useState } from "react";
import React from "react";

export const HomePage =()=>{
    

    const history = useHistory()

    const GotoListTripPage = () =>{
        history.push("/trips/list")
    }

    const GotoAdminHomePage = () =>{
        history.push("/admin/trips/list")
    }

    return(
    <div>
    <div>Para o usuário escolher entre Área Administrativa e Lista de Viagens</div>
    <button onClick={GotoListTripPage}>Voltar para lista de Viagens</button>

    <button onClick={GotoAdminHomePage}>Voltar para área administrativa</button>
    </div>
    );
}