//>>>>IMPORTAÇÕES - COMPONENTE (CARRINHO CARDS)<<<<
import React from "react";
import styled from "styled-components";

//>>>>CÓDIGO - ESTILIZAÇÕES DO COMPONENTE (CARRINHO CARDS)<<<<


const EscolheProdutos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`

//>>>>CÓDIGO - JSX DO COMPONENTE (CARRINHO CARDS)<<<<
function CarrinhoCards(props) {
    return (
        <EscolheProdutos>
          <p>{props.quantidade}x</p>
          <p>{props.nome}</p>
          <button onClick={props.removeCarrinho}>Remover</button>
        </EscolheProdutos>
    );
  }
  
  export default CarrinhoCards;