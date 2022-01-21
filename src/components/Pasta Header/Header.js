import React from "react";
import styled from "styled-components";
import Logo from "../../imagens/rocket-logo.png";


const MainContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: rgb(55, 26, 72);
    color: white;
`

const Logostyle = styled.img`
    width: 170px;
    margin-left: 20px;    
`

const Logostyle2 = styled.img`
    width: 170px;
    margin-right: 20px;    
`

const Titulostyle = styled.h1`
    font-size: 70px;
        
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