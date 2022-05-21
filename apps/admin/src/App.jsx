import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Button } from "ui";
import { Foo } from "Foo";


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <Button />
        <Foo />
      </header>
    </div>
  )
}

export default App
