import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Projeto React + Vite no GitHub Pages</h1>
     <p>Contador: {count}</p>
     <button onClick={()=>setCount(v => v + 1)}>Clique aqui</button>
    </>
  )
}

export default App
