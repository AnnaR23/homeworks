import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button';

function App() {
  const [buttonText, setButtonText] = useState('Click me');

  const handleButtonClick = () => {
    alert('button clicked!');
    setButtonText('You clicked me!');
  };



return (
  <>
    <div>
      <a href="https://vite.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
    <h1>Vite + React</h1>
      <Button text={buttonText} onClick={handleButtonClick} />
    <p>
      Click on the Vite and React logos to learn more
    </p>
  </>
);
}

export default App;
