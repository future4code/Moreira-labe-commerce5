import React from 'react'
import styled from 'styled-components'




const ContainerCard = styled.div`
    border: 1px solid black;
    margin: 50px;
    border-radius: 3px;
    padding-bottom: 15px;
`

function RepositorioCards (props) {

    return (
    
        <ContainerCard>
            <img src={props.imagem} alt="Imagem do Produto"/>
            <p>{props.produto}</p>
            <p>{props.preco}</p>
            <button onClick={props.adicionaCarrinho}>Adicionar ao Carrinho</button>
        </ContainerCard>
    )
}

export default RepositorioCards