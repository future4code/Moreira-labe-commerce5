//>>>>IMPORTAÇÕES - COMPONENTE (CARRINHO)<<<<
import React from "react";
import styled from "styled-components";
import CarrinhoCards from './CarrinhoCards'

//>>>>CÓDIGO - ESTILIZAÇÕES DO COMPONENTE (CARRINHO)<<<<
const MainContainerCarrinho = styled.div`
  border: 1px solid white;
  width: 15%;
  background-color: rgb(55, 26, 72);
  color: white;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    font-size: 10px;
    width: 30%;
  }
`

const EscolheProdutos2 = styled.p`
  text-align: left;
  margin-left: 12px;
`

//>>>>CÓDIGO - JSX DO COMPONENTE (CARRINHO)<<<<
function Carrinho(props) {
  return (
    <MainContainerCarrinho>
      <h1>Carrinho</h1>
      {props.addCarrinho.map((produto) => {
            return <CarrinhoCards 
            quantidade={produto.quantidade} 
            nome={produto.name}
            valorTotal={props.valorTotal}
            removeCarrinho={() => props.removeCarrinho(produto.id)}
            />;
          })}
      <EscolheProdutos2>Valor Total: <strong>R$ {props.valorTotal}</strong></EscolheProdutos2>
    </MainContainerCarrinho>

  );
}

export default Carrinho;
