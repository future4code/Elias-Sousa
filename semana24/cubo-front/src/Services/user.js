import axios from "axios";
import { BASE_URL } from "../Constants/Urls";






export const SendData = (body, clear) => {
    
    
    axios.post(`${BASE_URL}/new/participation`, body)
        .then((res) => {
           console.log("Participação adicionada", res)
           //setData(res.data)
            clear()
            
        })
        .catch((err) => {
            
            console.log("Erro:" , err)
        })
}