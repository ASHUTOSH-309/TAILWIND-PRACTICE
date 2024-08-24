import 'tailwindcss/tailwind.css';   // Import Tailwind CSS
import 'flowbite/dist/flowbite.css'; // Import Flowbite CSS
import './App.css'
import { Success } from './components/Success'
import { Failure } from './components/Faliure';
import { Info } from './components/Info';
import { Warning } from './components/Warning';
import { AdditionalComponent } from './components/AdditionalComponent';

function App() {


  return (
    <div>
      <Success />
      <Failure />
      <Info />
      <Warning />
      <AdditionalComponent />
    </div>

  )
}

export default App
