import React from 'react'
import {Top} from './styled';
import Logo from '../../assets/logo.png'
import {goToFeedPage, goToLogin} from '../../routes/Coordinator'
import { useHistory } from 'react-router-dom';
import LoginButton from '../../assets/login.png'
import {Logbutton} from './styled';


const Header =()=>{
    const history = useHistory()
    return(
        <Top>
             <img src={Logo} onClick={()=>goToFeedPage(history)} /> 

             <Logbutton>
             <img src={LoginButton} onClick={()=>goToLogin(history)} />
             </Logbutton>
             
        </Top>
    )
}
export default Header;
