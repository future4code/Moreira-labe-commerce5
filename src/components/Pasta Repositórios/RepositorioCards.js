import React from 'react'
import styled from 'styled-components'




const ContainerCard = styled.div`
    margin: 15px;
    border-radius: 15px;
    padding-bottom: 15px;
    width: 25%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;  
    background-color: white;  
    font-weight:bold;
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        font-size: 10px;  
        width: 80%;
    }
    :hover {
        transition-duration: 1s;
        transform:scale(1.1 , 1.1);
    }
`

const Imagens = styled.img`
    width: 80%;
    padding-top: 10px;
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        width: 60%;
    }
`

const Preco = styled.p `
    color: #3936EB;
    font-weight: bold;
    font-size: 20px;
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        font-size: 12px;  
    }
`


const Buttons = styled.button`
    background-color: #3936EB;
    color: white;
    border: none;
    border-radius: 35px;
    height: 28px;
    :hover {
        cursor:pointer;
        background-color: #2CA0F5;
        transition-duration: 1s;
        transform:scale(1.2 , 1.2);
    }
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        font-size: 10px;  
        height: 20px;
    }
`


function RepositorioCards (props) {

    return (
    
        <ContainerCard>
            <Imagens src={props.imagem} alt="Imagem do Produto"/>
            <p>{props.produto}</p>
            <Preco>R$ {props.preco},00</Preco>
            <Buttons onClick={props.adicionaCarrinho}>Adicionar ao Carrinho</Buttons>
        </ContainerCard>
    )
}

export default RepositorioCards