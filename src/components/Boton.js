import React from "react";
import '../stylesheet/Boton.css'

function Button({ texto, esBotonDeClic, manejarClick }){

  return (
    <button className = { esBotonDeClic ? "boton-clic" : "boton-reiniciar" }
    onClick={manejarClick}>
      {texto}
    </button>
  )
}

export default Button;