import React from 'react'
import {ContainerLogin} from './styled'
import {BackgroundLoginPage} from './styled'
import LoginIcon from '../../assets/loginIcon.png'
import { TextField } from '@material-ui/core'
import { Button } from '@material-ui/core'
import useForm from '../../hooks/useForm'
import { login } from '../../services/user'
import { useHistory } from 'react-router-dom'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'
import {goToSignUp} from '../../routes/Coordinator'






const LoginPage=()=> {
  const [form,onChange,clear] = useForm({email:"",password:""})
  const history = useHistory()

  useUnprotectedPage()



  const onSubmmitForm=(event)=>{
      event.preventDefault()
      login(form,clear,history)
  }

 

  return (

    
    <BackgroundLoginPage>

    <ContainerLogin>

    
      <img src = {LoginIcon}/>
      <p>LOGIN</p>

      <form onSubmit={onSubmmitForm}>
      
      <TextField
      name={"email"}
      value={form.email}
      onChange={onChange}
      label={"E-mail"}
      variant={"outlined"}
      fullWidth
      margin={"normal"}
      required
      type={"email"}
      />

<TextField
      name={"password"}
      value={form.password}
      onChange={onChange}
      label={"Senha"}
      variant={"outlined"}
      fullWidth
      margin={"normal"}
      required
      type={"password"}
      />

        <Button
        type={"submmit"}
        fullWidth
        variant={"contained"}
        > ENTRAR
        </Button >
      </form>

      <Button 
      fullWidth
      variant={"contained"}
      >Não tem uma conta? CADASTRE-SE
      </Button>
     
      </ContainerLogin>

      </BackgroundLoginPage>
  );
}

export default LoginPage;