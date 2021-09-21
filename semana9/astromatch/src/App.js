import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import AstroMatch from './components/Astromatch/AstroMatch';
import Heart from './img/hearts.jpg'
import { useState } from 'react';

const ScreenBox = styled.div`
background-color:LightGray;
display: flex;
background-image: url(${Heart});
background-repeat: no-repeat;
align-items: center;
justify-content: center;

background-size: cover;
    height: 100vh;
    width: 100%;

`;


const ScreenButton = styled.div` //estilizar butao de limpar dps

`;


const App=()=> {

  const [limpar,setLimpar]=useState('true')

  return (
    <ScreenBox>
      
      <AstroMatch></AstroMatch>
      
      <ScreenButton>
        <button>Limpar swipes e matches</button>
        </ScreenButton>

      </ScreenBox>
  );
}

export default App;
