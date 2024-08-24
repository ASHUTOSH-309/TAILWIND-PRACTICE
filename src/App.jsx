import 'tailwindcss/tailwind.css';   // Import Tailwind CSS
import 'flowbite/dist/flowbite.css'; // Import Flowbite CSS


import { useState } from 'react'

import './App.css'
import { RevenueCard } from './components/RevenueCard'
import { Success } from './components/Success'
import { Failure } from './components/Faliure';
import { Info } from './components/Info';
import { Warning } from './components/Warning';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Success />
      <Failure />
      <Info />
      <Warning />
    </div>

  )
}

export default App
