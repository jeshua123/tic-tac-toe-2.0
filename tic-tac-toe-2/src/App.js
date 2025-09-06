function App() {
  console.log("hola")
  return (
    <div className="main">
   <div class="wrapper">
       <div class="container">
           <button class="button-option"></button>
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
       <button id="restart">inicio</button>
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
