//>>>>IMPORTAÇÕES - COMPONENTE (CARRINHO CARDS)<<<<
import React from "react";
import styled from "styled-components";


//>>>>CÓDIGO - ESTILIZAÇÕES DO COMPONENTE (CARRINHO CARDS)<<<<
const EscolheProdutos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;

  p {
    font-size: 12px;
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    font-size: 8px;
  }
  }

`

const Buttons = styled.button`
    background-color: #EB8C49;
    color: white;
    border: none;
    border-radius: 35px;
    height: 28px;
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    font-size: 6px;
    height: 16px;
    
  }
    :hover {
        cursor:pointer;
        background-color: #EB543E;
        transition-duration: 1s;
        transform:scale(1.2 , 1.2);
    }
`

//>>>>CÓDIGO - JSX DO COMPONENTE (CARRINHO CARDS)<<<<
function CarrinhoCards(props) {
    return (
        <EscolheProdutos>
          <p>{props.quantidade}x</p>
          <p>{props.nome}</p>
          <Buttons onClick={props.removeCarrinho}>Remover</Buttons>
        </EscolheProdutos>
    );
  }
  
  export default CarrinhoCards;