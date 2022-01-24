//>>>>IMPORTAÇÕES - COMPONENTE (FILTRO)<<<<
import React from "react";
import styled from "styled-components";


//>>>>CÓDIGO - ESTILIZAÇÕES DO COMPONENTE (FILTRO)<<<<
const MainContainer = styled.div`
  border: 1px solid white;
  width: 15%;
  background-color: rgb(55, 26, 72);
  color: white;
  /* celulares */
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    font-size: 10px;
    width: 30%;
  } 
`

const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 10px;
  input {
    margin-bottom: 10px;
  }
  /* celulares */
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    font-size: 10px;
  }  
`

const Buttons = styled.button`
    background-color: #EB8C49;
    color: white;
    border: none;
    border-radius: 35px;
    height: 28px;
    :hover {
        cursor:pointer;
        background-color: #EB543E;
        transition-duration: 1s;
        transform:scale(1.2 , 1.2);
    }
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        font-size: 10px;  
        height: 20px;
    }
`

//>>>>CÓDIGO - JSX DO COMPONENTE (FILTRO)<<<<
function Filtro(props) {
  return (
    <MainContainer>
      <h1>Filtros</h1>

      <ContainerInputs>
        <label>Valor Mínimo:</label>
        <input 
        type="number" 
        value={props.valorMin} 
        placeholder="Digite um valor mínimo" 
        onChange={props.atualizaValorMin}
        />

        <label>Valor Máximo:</label>
        <input 
        type="number" 
        value={props.valorMax} 
        placeholder="Digite um valor máximo"
        onChange={props.atualizaValorMax}        
        />

        <label>Busca por Nome:</label>
        <input 
        type="text" 
        value={props.buscador} 
        placeholder="Digite o nome de um produto" 
        onChange={props.atualizaBuscador}        
        />
      </ContainerInputs>
      <Buttons onClick={props.limpaFiltros}>Limpar Filtros</Buttons>
    </MainContainer>
  );
}

export default Filtro;
