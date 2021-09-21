import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Lady from './img/lady.jpg'
import { useState } from 'react';



const ProfilesBox = styled.div`
border: solid black 1px;
width: 440px;
height: 530px;
display: flex;
flex-direction: column;
justify-content: center;
margin-left: 30px;
`;


const ProfilesImg = styled.div`
width: 100%;

img{
  width: 100%;
}
`;



const ProfilesButtons = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
cursor: pointer;
`;


const ProfilesTitles = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`;


const ProfilesDescription = styled.div`
display: flex;
`;



const Profiles=()=> {

  const [person,setPerson]=useState([])






  


  return (
    <ProfilesBox>
        <div>
            <ProfilesImg>
            <div><img src={Lady}/></div>
            </ProfilesImg>


            <ProfilesTitles>
            <h3>Nome aqui ,</h3>
            <p>idade</p>
            </ProfilesTitles>

            <ProfilesDescription>
              <p>informacao aki</p>
              </ProfilesDescription>
        </div>

        <ProfilesButtons>
            <button>Descartar</button>
            <button>Like</button>
            </ProfilesButtons>

      </ProfilesBox>
  );
}

export default Profiles;