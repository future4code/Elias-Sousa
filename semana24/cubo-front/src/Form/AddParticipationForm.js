import React, {useState} from "react"
import { InputsContainer, RegisterFormContainer } from "./Style"
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import useForm from "../Hooks/UseForm"

import { SendData } from "../Services/user"


import CircularProgress from '@material-ui/core/CircularProgress'



const ParticipationForm = ({setRightButtonText}) => {
    const [form, onChange, clear] = useForm({ firstname: "", lastname: "", participation: ""})

    const [isLoading, setIsLoading] = useState(false)

    const onSubmitForm = (event) => {
        event.preventDefault()
        SendData(form, clear, setRightButtonText, setIsLoading)
        
    }

    return (
        <RegisterFormContainer>
            <form onSubmit={onSubmitForm}>

                 <InputsContainer>
                 
                    <TextField 
                        name={"firstname"}
                        value={form.firstname}
                        onChange={onChange}
                        label={"Nome"}
                        variant={"outlined"}
                        placeholder={"Primeiro Nome"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"text"}
                     />



                    <TextField 
                        name={"lastname"}
                        value={form.lastname}
                        onChange={onChange}
                        label={"Sobrenome"}
                        variant={"outlined"}
                        placeholder={"Sobrenome"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"text"}
                     />

                    <TextField 
                        name={"productQuantity"}
                        value={form.productQuantity}
                        onChange={onChange}
                        label={"Quantidade"}
                        variant={"outlined"}
                        placeholder={"13"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"number"}
                     />


                </InputsContainer> 

                <Button
                    type={"submit"}
                    //fullWidth
                    //size="small"
                    variant={"contained"}
                    color={"primary"}
                >
                    {isLoading ? <CircularProgress color={"neutral"} size={24} /> : <b>Adicionar</b>}
                </Button>
                
            </form>
        </RegisterFormContainer>
    )
}

export default ParticipationForm;