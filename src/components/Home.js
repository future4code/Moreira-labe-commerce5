import React from "react";
import styled from "styled-components";
import RepositorioCards from "./RepositorioCards";

const MainContainer = styled.div`
  border: 1px solid black;
  width: 70%;
`

const OrdenacaoTextos = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 10px;
`    

const ContainerAlinhamento = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 25px auto;
`

class Home extends React.Component {
  render() {
    return (
      <MainContainer>
        <OrdenacaoTextos>
            <p>Quantidade de Produtos:</p>
            <div>
                <label>Ordenação:</label>
                <select>
                    <option>Crescente</option>
                    <option>Decrescente</option>
                </select>
            </div>
        </OrdenacaoTextos>

        <ContainerAlinhamento>
          <RepositorioCards
            imagem="https://picsum.photos/200/200?a=2"
            produto="Camiseta 1"
            preco="R$100,00"
          />
          <RepositorioCards
            imagem="https://picsum.photos/200/200?a=2"
            produto="Camiseta 2"
            preco="R$200,00"
          />
          <RepositorioCards
            imagem="https://picsum.photos/200/200?a=2"
            produto="Camiseta 3"
            preco="R$300,00"
          />
          <RepositorioCards
            imagem="https://picsum.photos/200/200?a=2"
            produto="Camiseta 4"
            preco="R$400,00"
          />
          <RepositorioCards
            imagem="https://picsum.photos/200/200?a=2"
            produto="Camiseta 5"
            preco="R$500,00"
          />
          <RepositorioCards
            imagem="https://picsum.photos/200/200?a=2"
            produto="Camiseta 6"
            preco="R$600,00"
          />
        </ContainerAlinhamento>
      </MainContainer>
    );
  }
}

export default Home;
