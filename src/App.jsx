import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [prod, setProd] = useState("")

    fetch('https://express-vercel-one-psi.vercel.app')
      .then(response => response.json()) // transforma a resposta em JSON
      .then(data => {
        setProd(data.prod)     // Caneta
      })
      .catch(error => {
        console.error('Erro na requisição:', error);
      })

  return (
    <>
      <h1>Projeto React + Vite no GitHub Pages</h1>
      <p>Produto: {prod}</p>
      <p>Contador de cliques: {count}</p>
      <button onClick={() => setCount(v => v + 1)}>Clique aqui</button>
    </>
  )
}

export default App
