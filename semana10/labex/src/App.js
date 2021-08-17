//importando as funcionalidades 
import {BrowseRouter, Switch, Route} from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { useEffect } from "react";
import { useState } from "react";
import React from "react";

//importando as páginas
import {Routes} from './Routes'



function App() {
  return (
    <div className="App">
      <p>app.js</p>
    
    <Routes/>



    </div>
  );
}

export default App;
