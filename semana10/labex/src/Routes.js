//importando as funcionalidades 
import {BrowserRouter, Switch, Route} from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { useEffect } from "react";
import { useState } from "react";
import React from "react";

//importando as páginas
import {TripDetailsPage} from './pages/TripDetailsPage'
import {LoginPage} from './pages/LoginPage'
import {ListTripsPage} from './pages/ListTripsPage'
import {HomePage} from './pages/HomePage'
import {CreateTripPage} from './pages/CreateTripPage'
import {ApplicationFormPage} from './pages/ApplicationFormPage'
import {AdminHomePage} from './pages/AdminHomePage'


export const Routes=()=> {

  
  return (
    <BrowserRouter>
    <Switch>


    
    <Route exact path={"/"}>
    <HomePage/>
    </Route>


    <Route exact path={"/admin/trips/id"}>
    <TripDetailsPage/>
    </Route>

    <Route exact path={"/login"}>
    <LoginPage/>
    </Route>

    <Route exact path={"/trips/list"}>
    <ListTripsPage/>
    </Route>

    <Route exact path={"/admin/trips/create"}>
    <CreateTripPage/>
    </Route>

    <Route exact path={"/trips/application"}>
    <ApplicationFormPage/>
    </Route>


    <Route exact path={"/admin/trips/list"}>
    <AdminHomePage/>
    </Route>



    </Switch>
    </BrowserRouter>
  );
}








