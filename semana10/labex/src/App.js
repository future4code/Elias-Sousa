//importando as funcionalidades 
import styled from "styled-components";
import React from "react";

//importando as páginas
import {Routes} from './Routes'


const NamePag = styled.div` // Estilizando Header
color:orange;
background-color: whitesmoke;
height:100px;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 100px;
box-shadow: 9px 7px 5px rgba(50, 50, 50, 0.77);


h1{
  font-size: 320%;
   font-family: Jazz LET; 
   font-style: oblique; 
}
`;


const AlignContentPage = styled.div` // Colocando o conteúdo chamado para o centro
display:flex;
justify-content: center;
`;



function App() {
  return (
    <div className="App">
      
      <NamePag>
      <h1>LABEX</h1>
      </NamePag>
    


    <AlignContentPage>
      <Routes/>
    </AlignContentPage>



    </div>
  );
}

export default App;
