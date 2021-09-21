import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import {goToFeedPage} from '../routes/Coordinator'


export const login =(body,clear,history)=>{ //login
    axios.post(`${BASE_URL}/users/login`,body)

    .then((res)=>{
      localStorage.setItem("token",res.data.token)
      clear()
      goToFeedPage(history)
    })

    .catch((error)=>alert("erro no login"))

  }


  export const signUp =(body,clear,history)=>{ //cadastro
    axios.post(`${BASE_URL}/users/signup`,body)

    .then((res)=>{
      localStorage.setItem("token",res.data.token)
      clear()
      goToFeedPage(history)
    })

    .catch((error)=>alert("erro no cadastro"))
  }



  export const posts =()=>{ //renderizar lista
    const token = localStorage.getItem("token")
    axios.get(`${BASE_URL}/posts`,
    {
      headers:{
      Autorization: token
    },
    })

    .then((res)=>{
      //localStorage.getItem(res.data.token)
      console.log("funcionou", res)
      
    })

    .catch((error)=>console.log("erro na renderizacao da lista",error))

  }