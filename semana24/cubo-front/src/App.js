import React, { useState, useEffect } from 'react'; 
//import { getData } from './Services/user';
import { ContainerForm } from './Style';
import { ContainerDescribe } from './Style';
import { ContainerData } from './Style';
import { ContainerTable } from './Style';
import { ContainerGraphic } from './Style';


import axios from "axios";
import { BASE_URL } from "./Constants/Urls";

import ParticipationForm from './Form/AddParticipationForm';


const App = () => {

  const [data,setData] = useState([])

//pega as informações registradas
  const getData = () => {
    axios.get(`${BASE_URL}/show/participation`)
        .then((res) => {
            //console.log(res)
            //setData(res.data)
        
        })
        .catch((err) => {
            console.log(err)
        })
}




//inicia a página com as informações registradas
  useEffect(() => {
    getData()
  },[data]);



  //map das informações registradas

  const Data =  data.map((item) => {
    return (

      <div key={item.id}>
     
      <p>{item.id}</p>
      <p>{item.firstname}</p>
      <p>{item.lastname}</p>
      <p>{item.participation}%</p>
      
      </div>
      )
  });



  return (
    <div>
      
      <ContainerForm>
      <ParticipationForm/>
      </ContainerForm>
      
      <ContainerDescribe >
        <h1>Data</h1>
        <p>Insira seus dados e acompanhe na tabela</p>
        </ContainerDescribe>

      <ContainerData>

        <ContainerTable>
        
        {Data}
        
        
        </ContainerTable>

      <ContainerGraphic>Grafico</ContainerGraphic>
      </ContainerData>

    </div>
  );
}

export default App;
