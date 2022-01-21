//>>>>IMPORTAÇÕES - COMPONENTE (CARRINHO)<<<<
import React from "react";
import styled from "styled-components";
import CarrinhoCards from './CarrinhoCards'

//>>>>CÓDIGO - ESTILIZAÇÕES DO COMPONENTE (CARRINHO)<<<<
const MainContainerCarrinho = styled.div`
  border: 1px solid black;
  width: 15%;
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
      <EscolheProdutos2>Valor Total: R${props.valorTotal}</EscolheProdutos2>
    </MainContainerCarrinho>

  );
}

export default Carrinho;
