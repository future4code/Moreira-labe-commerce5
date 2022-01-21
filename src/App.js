//>>>>IMPORTAÇÕES - APP JS<<<<
import React from "react";
import styled from "styled-components";
import "./styles.css";
import RepositorioCards from "./components/Pasta Repositórios/RepositorioCards";
import Header from "./components/Pasta Header/Header";
import Carrinho from "./components/Pasta Carrinho/Carrinho";
import Filtro from "./components/Pasta Filtro/Filtro";
import Imagem1 from "./imagens/macaco_bandeira.jpg";
import Imagem2 from "./imagens/layka_pretobranca.jpg";
import Imagem3 from "./imagens/camiseta_serie.jpeg";
import Imagem4 from "./imagens/et_dedomeio.jpg";
import Imagem5 from "./imagens/macaco_astronauta.jpg";
import Imagem6 from "./imagens/nave_espacial_meleva.jpg";
import Footer from "./components/Pasta Footer/Footer";
import {createGlobalStyle} from 'styled-components';


//>>>>CÓDIGO - ESTILIZAÇÕES DO APP JS<<<<
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`

const OrdenacaoBlocos = styled.div`
  display: flex;
`
const MainContainer = styled.div`
  border: 1px solid white;
  width: 70%; 
`

const OrdenacaoTextos = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 10px;
  color: #3936EB;
  font-weight: bold;
  font-size: 20px;
  select {
    box-shadow: rgba(57, 54, 235, 0.4) 5px 5px, rgba(57, 54, 235, 0.3) 10px 10px, rgba(57, 54, 235, 0.2) 15px 15px, rgba(57, 54, 235, 0.1) 20px 20px, rgba(57, 54, 235, 0.05) 25px 25px;
  }
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
        name: "Chimpanzé Colonizando Marte",
        value: 100.0,
        imageUrl: Imagem1
      },
      {
        id: 2,
        name: "Layka Traditional",
        value: 200.0,
        imageUrl: Imagem2
      },
      {
        id: 3,
        name: "Astro-Spock",
        value: 300.0,
        imageUrl: Imagem3
      },
      {
        id: 4,
        name: "E.t. Mal Educado",
        value: 400.0,
        imageUrl: Imagem4
      },
      {
        id: 5,
        name: "Macaconauta",
        value: 500.0,
        imageUrl: Imagem5
      },
      {
        id: 6,
        name: "Vamos Embora",
        value: 600.0,
        imageUrl: Imagem6
      }
    ],
    valorMin: "",

    valorMax: "",

    buscador: "",

    paramOrdem: 1,

    valorTotal: 0,

    addCarrinho: [
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

  adicionaCarrinho = (nomeProduto,valorProduto, idProduto) => {

    const produtoNoCarrinho = this.state.addCarrinho.find(produto => idProduto === produto.id)

    if(produtoNoCarrinho) {
      const novoProdutoCarrinho = this.state.addCarrinho.map(produto => {
        if(idProduto === produto.id) {
          return {
            ...produto,
            quantidade: produto.quantidade + 1
          }
        }
        return produto
      })
      this.setState({addCarrinho: novoProdutoCarrinho})
    } else {
      const produtoAAdicionar = this.state.produtos.find(produto => idProduto === produto.id) 

      const novoProdutoCarrinho = [...this.state.addCarrinho, {...produtoAAdicionar, quantidade: 1}]
      this.setState({addCarrinho: novoProdutoCarrinho})
    }
  }
   
  filtrosProdutos = () => {
    return(
      this.state.produtos
      .filter(produto => {
        return (
          produto.value >= this.state.valorMin ||
          this.state.valorMin === ""
        )
      })
      .filter(produto => {
        return (
          produto.value <= this.state.valorMax ||
          this.state.valorMax === ""
        )
      })
      .filter(produto => {
        return (produto.name
          .toLowerCase()
          .includes(this.state.buscador.toLowerCase())
        )
      })
      .sort((produtoAtual, proximoProduto) => {
        return (
          this.state.paramOrdem *
          (produtoAtual.value - proximoProduto.value)
        )
      })
    )
  }

  removeCarrinho = idProduto => {
    const novoProduto = this.state.addCarrinho.map(produto => {
      if(produto.id === idProduto) {
        return {
          ...produto,
          quantidade: produto.quantidade - 1
        }
      }
      return produto
    }).filter(produto => produto.quantidade > 0)

    this.setState({addCarrinho: novoProduto})
  }

  calculoValorTotal = () => {
    let valorTotal = 0

    for(let produto of this.state.addCarrinho) {
      valorTotal = valorTotal + (produto.value * produto.quantidade)
    }
    return valorTotal
  }


  render() {

    const produtosFiltradosOrdenados = this.filtrosProdutos()

    return (
      <div className="App">
        <GlobalStyle/>
        <Header/>
        <OrdenacaoBlocos>
          <Filtro
            atualizaValorMin={this.atualizaValorMin}
            atualizaValorMax={this.atualizaValorMax}
            atualizaBuscador={this.atualizaBuscador}
            valorMin={this.state.valorMin}
            valorMax={this.state.valorMax}
            buscador={this.state.buscador}
          />
          <MainContainer>
            <OrdenacaoTextos>
              <p>Quantidade de Produtos: {produtosFiltradosOrdenados.length}</p>
              <div>
                <label>Ordenação:   </label>
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
              {produtosFiltradosOrdenados 
                .map(produto => {
                  return (
                    
                    <RepositorioCards
                      imagem={produto.imageUrl}
                      produto={produto.name}
                      preco={produto.value}
                      adicionaCarrinho={() => {this.adicionaCarrinho(produto.name,produto.value, produto.id)}}
                    />

                  )
                })}
            </ContainerAlinhamento>
          </MainContainer>
          <Carrinho 
          addCarrinho={this.state.addCarrinho} 
          valorTotal={this.calculoValorTotal()}
          removeCarrinho={this.removeCarrinho}
          />
        </OrdenacaoBlocos>
        <Footer/>
      </div>
    )
  }
}

export default App
