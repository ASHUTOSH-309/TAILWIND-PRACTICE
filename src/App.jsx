import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4'> 
        {/* on screens with width<768 it will be a single column grid
          while on screens >= 768 px it will be a 3 column grid
      
      */}
        <div className='bg-red-500 col-span-1'>hi</div>
        <div className='bg-blue-500 col-span-1'>hi</div>
        <div className='bg-yellow-500 col-span-1'>hi</div>
        <div className='bg-red-500 col-span-1'>hi</div>
        <div className='bg-blue-500 col-span-1'>hi</div>
        <div className='bg-yellow-500 col-span-1'>hi</div>
        <div className='bg-yellow-500 col-span-1'>hi</div>
      </div>

   {/*    <div className='flex'>
        <div className='bg-red-500 w-[40%]'>hi</div>
        <div className='bg-yellow-500 w-[40%]' >hi</div>
        <div className='bg-blue-500 w-[20%]'>hi</div>
      </div> */}
    </>
  )
}

export default App
