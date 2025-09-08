import { useState } from "react";

function App() {

const [P1, setP1] = useState({})
//const [P2, setP2] = useState({})
//const [P3, setP3] = useState({})
//const [P4, setP4] = useState({})
//const [P5, setP5] = useState({})
//const [P6, setP6] = useState({})
//const [P7, setP7] = useState({})
//const [P8, setP8] = useState({})
//const [P9, setP9] = useState({})

function Click_En_Posición(e) {
  console.log(e)
  
}
  return (
    <div className="main">
   <div class="wrapper">
       <div class="container">
           <button class="button-option" onClick={(e) => { Click_En_Posición(e)}}>X</button>
           <button class="button-option"></button>
           <button class="button-option"></button>
           <button class="button-option"></button>
           <button class="button-option"></button>
           <button class="button-option"></button>
           <button class="button-option"></button>
           <button class="button-option"></button>
           <button class="button-option"></button>
       </div>
       <div className="submenu"> 
       <button id="restart">jugador 1</button>
       <button id="restart">jugador 2</button>
       <button id="restart">Inicio</button>
       <button id="restart">Restart</button>
       </div>
   </div>
   <div class="popup hide">
       <p id="message">TICK TACK TOE</p>
       <button id="juego_nuevo">Jugador VS jugador </button>
       <button id="dos_jugadores">Jugador vs Computador</button>
       <button id="vs_computadora">Empezar</button>
   </div>
          
   <div class="popup2 hide">
       <input class="inputJugador" placeholder="Jugador 1"/>       
       <input class="inputJugador" placeholder="Jugador 2"/>       
       <button id="vs_computadora">Empezar</button>
   </div>
          
    </div>

  );
}

export default App;
