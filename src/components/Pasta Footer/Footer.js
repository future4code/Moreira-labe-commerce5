import React from "react";
import styled from "styled-components";
import linkedin from "../../imagens/linkedin.png";
import whatsapp from "../../imagens/whatsapp.png";
import telegram from "../../imagens/telegram.png";

const MainContainer = styled.div`
    width: 100%;
    background-color: rgb(55, 26, 72);
    color: white;
`
const Icones = styled.img`
    width: 50px;
    padding: 10px 35px;
`

function Footer () {
    return (
        <MainContainer>
        <h2> Não deixe de nos seguir nas redes sociais:</h2>
        <div>
            <a href="https://www.linkedin.com" target="_blank"><Icones src={linkedin}/></a>
            <a href="https://web.whatsapp.com/" target="_blank"><Icones src={whatsapp}/></a>
            <a href="https://web.telegram.org/z/" target="_blank"><Icones src={telegram}/></a>
        </div>
      </MainContainer>
  
    );
}
  
  
  export default Footer;