import './App.css'
import { useState } from 'react'
import Cabecalho from './componentes/Header'
import Produto from './componentes/Produto'

export function App() {
  const [counter, setCounter] = useState(0)

  const addValue = () => {
    setCounter(counter + 1)
  }

  const remValue = () => {
    setCounter(counter - 1)
  }

  const resValue = () => {
    setCounter(counter - counter)
  }


  return (
    <>
      <Cabecalho name="fulano" />
      <div>
        <p>Contador: {counter}</p>
      </div>
      <button onClick={addValue}>Adicionar</button>
      <button onClick={remValue}>Remover</button>
      <button onClick={resValue}>Resetar</button>

      <div style={{display: "flex", gap: 10 , width:'100%', flexWrap:'wrap', justifyContent: 'center'}}>
        <Produto nome="poduto 1" preco="20,00" descricao="descricacao do produto 1"/>
        <Produto nome="poduto 2" preco="30,00" descricao="descricacao do produto 2"/>
        <Produto nome="poduto 3" preco="40,00" descricao="descricacao do produto 3"/>
        <Produto nome="poduto 4" preco="50,00" descricao="descricacao do produto 4"/>
        <Produto nome="poduto 5" preco="60,00" descricao="descricacao do produto 5"/>
        <Produto nome="poduto 6" preco="70,00" descricao="descricacao do produto 6"/>
        <Produto nome="poduto 7" preco="80,00" descricao="descricacao do produto 7"/>
        <Produto nome="poduto 8" preco="90,00" descricao="descricacao do produto 8"/>
        <Produto nome="poduto 9" preco="100,00" descricao="descricacao do produto 9"/>
      </div>
    </>
  )
}

export default App
