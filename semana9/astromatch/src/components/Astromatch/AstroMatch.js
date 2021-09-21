import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Matches from '../Matches/Matches';
import Profiles from '../Profiles/Profiles';
import Logo from './img/logo.png';
import BackIcon from './img/back.png';
import MatchIcon from './img/match.png'
import { useState } from 'react';
import { useEffect } from 'react';


const AstroBox = styled.div`
background-color:white;
display: flex;
flex-direction: column;
border: solid red 2px;
border-radius: 10px;
margin:2px;
height: 600px;
width: 500px;
`;

const AstroHeader = styled.header`
background-color:whitesmoke;
height: 60px;
display: flex;
flex-direction: row;
justify-content: space-around;
    align-items: center;

img{
    width: 130px;
    height: 95px;
    
}
`;

const AstroBackButton = styled.div` 


    img{
      display: flex;
      width:30px;
      height: 30px;
      cursor: pointer;
    }
`;


const MetchButton = styled.div` 


    img{
      display: flex;
      width:40px;
      height: 40px;
      cursor: pointer;
    }
`;



const AstroMatch=()=> {

  const [renderizaMatch,setRenderizaMatch]=useState('false')
  const [renderizaProfile,setRenderizaProfile]=useState('true')

  const [profiles, setProfiles]=useState([])


  const Renderiza =()=>{
    switch (renderizaMatch){
      case 'true' :
      return <Matches/>
      
     case 'false' : 
      return <Profiles/>
    
  default:
  <div> deu ruim </div>
}
  }


  const OnclickMatch=()=>{
    setRenderizaMatch("true")
    setRenderizaProfile("false")

  }


  const OnclickBackButton=()=>{
    setRenderizaMatch("false")
    setRenderizaProfile("true")

  }





  const request = axios.get( 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:elias-sousa-lovelace/person',{
   
  })

  request.then((res)=>{
    setProfiles(res.data.profile)
    
  }).catch((error)=>{
    console.log("algo deu errado")
  })



//atribuir uma constante q pega um conjunto de valores e depois fazer o map dessa informação , para poder pegar as 
//informaçoes desse elemento

//console.log(profiles.age);



  





  return (
    <AstroBox> {/* estilização do conteiner do AsstroMatch */}
        <AstroHeader> {/* estilização do header do AstroMatch */}
      

      <AstroBackButton> {/* estilização do botao voltar p profiles */}
        <img title="Volte aos perfis" onClick={OnclickBackButton} src={BackIcon}/>
        </AstroBackButton>

          <img src={Logo}/>

       <MetchButton> {/* estilização do botao ir p match */}
          <img onClick={OnclickMatch} title="Veja seus matches" src={MatchIcon}/>
          </MetchButton>

      </AstroHeader>


      {Renderiza()}
      
     
      


      


      </AstroBox>
  );
}

export default AstroMatch;