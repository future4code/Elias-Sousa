import React from 'react'
import {Top} from './styled';
import Logo from '../../assets/logo.png'


const Header =()=>{
    return(
        <Top>
            <img src={Logo}/>
        </Top>
    )
}
export default Header;
