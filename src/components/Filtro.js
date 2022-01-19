import React from 'react'
import styled from 'styled-components'


const MainContainer = styled.div`
    border: 1px solid black;
    width: 15%;
`

const ContainerInputs = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;    
    padding: 10px;
    input {
        margin-bottom: 10px;
    }

`
// const EscolheProdutos2 = styled.p`
//     text-align: left;
//     margin-left: 12px; 
// `


class Filtro extends React.Component {
    

    render() {
      
      return (
        <MainContainer>
          <h1>Filtros</h1>
          
          <ContainerInputs>
            <label>Valor Mínimo:</label>
            <input type="number" placeholder="Digite um valor mínimo"/>
            
            <label>Valor Máximo:</label>
            <input type="number" placeholder="Digite um valor máximo"/>

            <label>Busca por Nome:</label>
            <input type="text" placeholder="Digite o nome de um produto"/>
          </ContainerInputs>

        </MainContainer>
      )
    }
  }
  
  export default Filtro