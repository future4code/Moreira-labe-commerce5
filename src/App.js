import React from 'react'
import styled from 'styled-components'
import './styles.css'
import Home from './components/Home'
import Carrinho from './components/Carrinho'
import Filtro from './components/Filtro'

const OrdenacaoBlocos = styled.div`
  display: flex;

`

class App extends React.Component {
    

  render() {
    
    return (
      <div className="App">
        <h1>Astrobot-Commerce</h1>
        <OrdenacaoBlocos>
          <Filtro/>
          <Home/>
          <Carrinho/>
        </OrdenacaoBlocos>
        
      </div>
    )
  }
}

export default App
