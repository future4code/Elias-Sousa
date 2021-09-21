import React from 'react'
import {BackgroundSignPage} from './styled'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'
import { signUp } from '../../services/user'
import useForm from '../../hooks/useForm'
import { TextField } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

const SignUpPage=()=> {

  const [form,onChange,clear]  =useForm({username:'',email: '', password:''})
  const history = useHistory()

  const onSubmmitForm = (event)=>{
    event.preventDefault()
    signUp(form,clear,history)
  }


  useUnprotectedPage()

  return (
    <BackgroundSignPage>
      SignUpPage
      




      <form onSubmit={onSubmmitForm}>
      


      <TextField
      name={"username"}
      value={form.username}
      onChange={onChange}
      label={"Nome"}
      variant={"outlined"}
      fullWidth
      margin={"normal"}
      required
      />



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
        > CADASTRAR
        </Button >
      </form>
      











    </BackgroundSignPage>
  );
}

export default SignUpPage;