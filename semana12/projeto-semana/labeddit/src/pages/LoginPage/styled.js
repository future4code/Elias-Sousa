import styled from 'styled-components';
import LoginBackground from '../../assets/backlogin.jpg'


export const BackgroundLoginPage = styled.div`
background-size: cover;
display: flex;
width: 100%;
height: 100vh;
justify-content: center;
align-items: center;
`;


export const ContainerLogin = styled.div`
background-color: whitesmoke;
//opacity: 15%;
//background: transparent;
border-radius:15px;
display: flex;
flex-direction: column;
width: 35%;
height: 500px;
//justify-content: center;
align-items: center;
padding: 5px;
color: orange;



img{
    opacity: 340%;
    width: 20%;
    height:25%;
    margin-top: 5px;
}

input {
    margin-top:15px;
    width: 50%;
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    border-radius: 5px;
    height: 2px;
    
}


button{
    margin-top:30px;
    width: 80%;
    background-color:red;
    border:none;
    border-radius: 5px;
    height: 7%;
}
`;




