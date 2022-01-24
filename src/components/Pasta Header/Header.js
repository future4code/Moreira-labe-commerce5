import React from "react";
import styled from "styled-components";
import Logo from "../../imagens/rocket-logo.png";


const MainContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgb(55, 26, 72);
    color: white;
    width:100vw;
  `

const Logostyle = styled.img`
    width: 170px;
    margin-left: 20px;
    /* celulares */
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
      max-width: 70px;
    } 
`

const Logostyle2 = styled.img`
    width: 170px;
    margin-right: 20px;   
    /* celulares */
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
      max-width: 70px;
    }  
`

const Titulostyle = styled.h1`
    font-size: 70px;
    /* celulares */
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
      font-size: 20px;
    }   
`

function Header() {
    return (
      <MainContainer>
        <Logostyle src= {Logo}/>
        <Titulostyle>Astrobot T-Shirt Store</Titulostyle>    
        <Logostyle2 src= {Logo}/>    
      </MainContainer>
  
    );
  }
  
  export default Header;