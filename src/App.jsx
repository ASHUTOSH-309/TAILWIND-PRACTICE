import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div style={{ display: "flex" }}>

        <div style={{ backgroundColor: "red" }}>
          Hi from red

        </div>

        <div style={{ backgroundColor: "blue" }}>
          Hi from blue

        </div>

        <div style={{ backgroundColor: "green" }}>

          Hi from green
        </div>


      </div>


    </>
  )
}

export default App
