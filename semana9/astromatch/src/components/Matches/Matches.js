import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Lady from '../Profiles/img/lady.jpg'
import { useState } from 'react';



const BoxProfileMatch = styled.div`
display: flex;
flex-direction: row;
border: solid black 2px;
`;


const ProfileMatchImg = styled.div`
width: 440px;
height:100px;

img{
  width: 35%;
  height: 100%;
}
`;

const Matches=()=> {

  const [matches,setMatches]=useState([])


  return (
    <BoxProfileMatch>
      <ProfileMatchImg>
        <img src={Lady}/>
        </ProfileMatchImg>
      <p>Dona Lady</p>
    </BoxProfileMatch>
  );
}

export default Matches;