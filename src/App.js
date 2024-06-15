import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.png'
import Button from './components/Boton';
import Contador from './components/Contador';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0); 

  const manejarClick = () => {
    setNumClicks(numClicks + 1);

  }

  const reinciarContador = () =>{
    setNumClicks(0);
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-container'>
        <img 
        className='freecodecamp-logo'
        src = {freeCodeCampLogo}
        alt='Logo de FreeCodeCamp' />
      </div>

      <div className='contenedor-principal'>

        <Contador numClicks={numClicks} />

        <Button
          texto="Click"
          esBotondeClic = {true}
          manejarClick = {manejarClick} />
        <Button 
        texto="Reiniciar"
        esBotondeClic = {false}
        manejarClick = {reinciarContador} />
      </div>
    </div>
  );
}

export default App;
