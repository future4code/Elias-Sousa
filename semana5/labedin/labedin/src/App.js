import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

import ImagemPerfil from './img/perfil.jpg';
import Labenu from './img/labenu.png';
import Etec from './img/etec.png';

import IconeGmail from './img/gmail.png';
import IconeLocal from './img/localizacao.png';



import styled from "styled-components";

import SessaoHabilidades from './components/SessaoHabilidades/SessaoHabilidades';



const DadosPessoais = styled.div`
.bigcard-container {
  display: flex;
  align-items: center;
  border: 1px solid black;
  padding: 20px 10px;
  margin-bottom: 10px;
  height: 200px;
}

.bigcard-container  img {
  width: 70px;
  margin-right: 10px;
  border-radius: 50%;
}

.bigcard-container h4 {
  margin-bottom: 15px;
}

.bigcard-container  div {
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
}
`;


const Contato = styled.div`


div { 
display:flex;
flex-direction: row;

width: 40vw;
margin: 15px 0;
padding: 40px;
color:black;
justify-content:center;
align-items:center;
}

.blocos{
  border: solid 1px;
}
`;





const Buttons = styled.div`
.image-button-container {
  display: flex;
  align-items: center;
  border: 1px solid black;
  border-radius: 50px;
  width: 200px;
  padding: 15px 30px;
  margin: 10px auto;
}

.image-button-container > img {
  width: 30px;
  margin-right: 10px;
}

`;


const Icones = styled.div`
 img{


width: 50px;
height: 50px;
margin-right:12px;
}
`;


const Dotes = styled.div`
display:flex;
flex-direction:row;
margin-top:20px;
background-color:#3db0f7;

div{
  background-color:#79d1ff;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items:center;
  margin:12px;
  border-radius: 25px;
  padding:15px;
}

h5{
  color:blue;
  text-shadow: 0.1em 0.1em white;
}



`;


function App() {
  return (
    
    
    <div className="App">
      
      <div className="page-section-container">
      <DadosPessoais>
        <h2>Dados pessoais</h2>
        
        <CardGrande 
          imagem={ImagemPerfil}
          nome="Elias" 
          descricao="Oi, meu nome é Elias, Sou aluno da Labenu. Curso Desenvolvimento WebFull stack e estou aprendendo muito a programar."
        />
        
        <Buttons>
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
        </Buttons>

      </DadosPessoais>
      </div>
      

      <Contato>
        
      <Icones>
      <CardPequeno  iconeGmail={IconeGmail} email={'inboxsilva1998@gmail.com'} IconeLocal={IconeLocal} endereco={'Rua Teodoro Villart ,403 - São Paulo'}/>
      </Icones>
      
      </Contato>


      <div className="page-section-container">
      <DadosPessoais>
        <h2>Experiência Academica</h2>
        <CardGrande 
          imagem={Labenu}
          nome="Labenu" 
          descricao="Cursando: Web FullStack" 
        />
        </DadosPessoais>

        <DadosPessoais>
        <CardGrande 
          imagem={Etec} 
          nome="Etec" 
          descricao="Cursando: Tec. ADS" 
        />
        </DadosPessoais>
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>

        <Buttons>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook" 
        />        
        </Buttons>

        <Buttons>
        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
        </Buttons>
      </div>

      <div className="habilidades">
      <Dotes>
      
      <SessaoHabilidades habilidade={'Comunicativo'} resumo={'Em grupo consigo contribuir em comunicação'}/>

      <SessaoHabilidades habilidade={'Empatico'} resumo={'Consigo ver as necessidades das pessoas ao meu redor'}/>

      <SessaoHabilidades habilidade={'AutoMotivado'} resumo={'Sou capaz de me auto-Motivar em momentos difíceis'}/>
      
      <SessaoHabilidades habilidade={'Focado'} resumo={'Persisto em meus objetivos'}/>
      </Dotes>
      </div>

  

    </div>
  );
}

export default App;
