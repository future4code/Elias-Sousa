import { useHistory } from "react-router-dom";
import { useLayoutEffect } from "react";
import { goToLogin } from "../routes/Coordinator";

const useProtectedPage=()=>{
    const history = useHistory()
    useLayoutEffect(()=>{
        const token = localStorage.getItem("token")
        if(!token){
            goToLogin(history)
        }
    },[history])

}
export default useProtectedPage //importar esse trecho para as páginas que vocÊ deseja proteger