import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

import styled from "styled-components";

const Contato = styled.section`
color:black;
display:flex;
flex-direction: column;
border:solid 1px;
width: 40vw;
margin: 10px 0;
`;





function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Elias" 
          descricao="Oi, meu nome é Elias, Sou aluno da Labenu. Curso Desenvolvimento WebFull stack e estou aprendendo muito a programar."
        />
        
      
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <Contato>
      <div>
      <CardPequeno email={'inboxsilva1998@gmail.com'} endereco={'Rua Teodoro Villart ,403 - São Paulo'}/>
      </div>
      </Contato>


      <div className="page-section-container">
        <h2>Experiências Academica</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Cursando: Web FullStack" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="Etec" 
          descricao="Cursando: Tec. ADS" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
