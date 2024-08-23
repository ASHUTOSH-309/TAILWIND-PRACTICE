import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ backgroundColor: "red" }}>Hi from red</div>
        <div style={{ backgroundColor: "blue" }}> Hi from blue</div>
        <div style={{ backgroundColor: "green" }}> Hi from green</div>
      </div>

      <div className="flex bg-red-400 justify-between">
        <div className='bg-red-600'>Hi from red</div>
        <div className='bg-blue-500'> Hi from blue</div>
        <div className='bg-green-500' > Hi from green</div>
      </div>
    </>
  )
}

export default App
