//>>>>IMPORTAÇÕES - COMPONENTE (CARRINHO)<<<<
import React from "react";
import styled from "styled-components";

//>>>>CÓDIGO - ESTILIZAÇÕES DO COMPONENTE (CARRINHO)<<<<
const MainContainer = styled.div`
  border: 1px solid black;
  width: 15%;
`

const EscolheProdutos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`

const EscolheProdutos2 = styled.p`
  text-align: left;
  margin-left: 12px;
`

//>>>>CÓDIGO - JSX DO COMPONENTE (CARRINHO)<<<<
function Carrinho(props) {
  return (
    <MainContainer>
      <h1>Carrinho</h1>
      <EscolheProdutos>
        <p>{props.quantidade}x</p>
        <p>{props.nome}</p>
        <button>Remover</button>
      </EscolheProdutos>
      <EscolheProdutos2>Valor Total: R$xx,xx</EscolheProdutos2>
    </MainContainer>
  );
}

export default Carrinho;
