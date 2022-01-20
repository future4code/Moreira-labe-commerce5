//>>>>IMPORTAÇÕES - APP JS<<<<
import React from "react";
import styled from "styled-components";
import "./styles.css";
// import Home from './components/Home'
import RepositorioCards from "./components/RepositorioCards";
import Carrinho from "./components/Carrinho";
import Filtro from "./components/Filtro";

//>>>>CÓDIGO - ESTILIZAÇÕES DO APP JS<<<<
const OrdenacaoBlocos = styled.div`
  display: flex;
`

//>>>>CÓDIGO - ESTILIZAÇÕES DO COMPONENTE (HOME)<<<<
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

class App extends React.Component {
  state = {
    produtos: [
      {
        id: 1,
        name: "Camiseta 1",
        value: 100.0,
        imageUrl: "https://picsum.photos/200/200"
      },
      {
        id: 2,
        name: "Camiseta 2",
        value: 200.0,
        imageUrl: "https://picsum.photos/200/200"
      },
      {
        id: 3,
        name: "Camiseta 3",
        value: 300.0,
        imageUrl: "https://picsum.photos/200/200"
      },
      {
        id: 4,
        name: "Camiseta 4",
        value: 400.0,
        imageUrl: "https://picsum.photos/200/200"
      },
      {
        id: 5,
        name: "Camiseta 5",
        value: 500.0,
        imageUrl: "https://picsum.photos/200/200"
      },
      {
        id: 6,
        name: "Camiseta 6",
        value: 600.0,
        imageUrl: "https://picsum.photos/200/200"
      },
    ],
    valorMin: "",

    valorMax: "",

    buscador: "",

    paramOrdem: 1,

    addCarrinho: [
      {
        id: 1,
        nome: "Camiseta 1",
        valor: 100.0,
        quantidade: 1
      }
    ]
  };

  atualizaValorMin = (event) => {
    this.setState({
      valorMin: event.target.value
    });
  };

  atualizaValorMax = (event) => {
    this.setState({
      valorMax: event.target.value
    });
  };

  atualizaBuscador = (event) => {
    this.setState({
      buscador: event.target.value
    });
  };

  atualizaOrdem = (event) => {
    this.setState({
      paramOrdem: event.target.value
    });
  };

  // adicionaCarrinho = (nomeProduto,valorProduto) => {
  //   const novoProduto={
  //     nome: nomeProduto,
  //     valor: valorProduto,
  //     quantidade: 1
  //     }
  //   const copiaProdutos=[
  //     ...this.state.addCarrinho,novoProduto
  //   ]
  //     this.setState({addCarrinho:copiaProdutos})
  // }
    
  render() {
    return (
      <div className="App">
        <h1>Astrobot-Commerce</h1>
        <OrdenacaoBlocos>
          <Filtro
            atualizaValorMin={this.atualizaValorMin}
            atualizaValorMax={this.atualizaValorMax}
            atualizaBuscador={this.atualizaBuscador}
            valorMin={this.state.valorMin}
            valorMax={this.state.valorMax}
            buscador={this.state.buscador}
          />

          {/* CÓDIGO TRAZIDO DO HOME */}
          <MainContainer>
            <OrdenacaoTextos>
              <p>Quantidade de Produtos:</p>
              <div>
                <label>Ordenação:</label>
                <select
                  value={this.state.paramOrdem}
                  onChange={this.atualizaOrdem}
                >
                  <option value={1}>Crescente</option>
                  <option value={-1}>Decrescente</option>
                </select>
              </div>
            </OrdenacaoTextos>

            <ContainerAlinhamento>
              {this.state.produtos
                .filter((produto) => {
                  return (
                    produto.value >= this.state.valorMin ||
                    this.state.valorMin === ""
                  );
                })
                .filter((produto) => {
                  return (
                    produto.value <= this.state.valorMax ||
                    this.state.valorMax === ""
                  );
                })
                .filter((produto) => {
                  return produto.name
                    .toLowerCase()
                    .includes(this.state.buscador.toLowerCase());
                })
                .sort((produtoAtual, proximoProduto) => {
                  return (
                    this.state.paramOrdem *
                    (produtoAtual.value - proximoProduto.value)
                  );
                })
                .map((produto) => {
                  return (
                    <RepositorioCards
                      imagem={produto.imageUrl}
                      produto={produto.name}
                      preco={produto.value}
                      // adicionaCarrinho={this.adicionaCarrinho}
                    />
                  );
                })}
            </ContainerAlinhamento>
          </MainContainer>
          {this.state.addCarrinho.map((produto) => {
            return <Carrinho 
            quantidade={produto.quantidade} 
            nome={produto.nome}
            />;
          })}
        </OrdenacaoBlocos>
      </div>
    );
  }
}

export default App;
