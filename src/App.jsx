import 'tailwindcss/tailwind.css';   // Import Tailwind CSS
import 'flowbite/dist/flowbite.css'; // Import Flowbite CSS
import './App.css'
import { Success } from './components/Success'
import { Failure } from './components/Faliure';
import { Info } from './components/Info';
import { Warning } from './components/Warning';
import { AdditionalComponent } from './components/AdditionalComponent';
import MyPage from './components/Themes/MyPage';

function App() {


  return (

    <div className='bg-primary'>
      <Success />
      <Failure />
      <Info />
      <Warning />
      <AdditionalComponent />
      <MyPage />
    </div>

  )
}

export default App
