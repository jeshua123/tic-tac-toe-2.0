import { useState } from "react";

function App() {
const [Turno, setTurno] = useState(true)
const [Contador, setContador] = useState(0)
const [Ganador, setGanador] = useState("")
const [P1, setP1] = useState(
  {
valor:"",
display:"",
disable:false}
)
const [P2, setP2] = useState(  {
valor:"",
display:"",
disable:false})
const [P3, setP3] = useState(  {
valor:"",
display:"",
disable:false})
const [P4, setP4] = useState(  {
valor:"",
display:"",
disable:false})
const [P5, setP5] = useState(  {
valor:"",
display:"",
disable:false})
const [P6, setP6] = useState(  {
valor:"",
display:"",
disable:false})
const [P7, setP7] = useState(  {
valor:"",
display:"",
disable:false})
const [P8, setP8] = useState(  {
valor:"",
display:"",
disable:false})
const [P9, setP9] = useState(  {
valor:null,
display:"",
disable:false})
function cambioTurno() {
  setTurno(!Turno)
}
function Click_En_Posición(e,setFun) {

setFun({display:Turno?"x":"o",disable:true,valor:Turno})
cambioTurno()
setContador(Contador+1)

}

if (Contador===5) {
  switch (Ganador) {
    //verticales
  case (P1.valor)&&(P2.valor)&&(P3.valor):
    setGanador("jugador 1 gana")
    break;
  case (P4.valor)&&(P5.valor)&&(P6.valor):
   setGanador("jugador 1 gana")
    break;
      case (P7.valor)&&(P8.valor)&&(P9.valor):
   setGanador("jugador 1 gana")
    break;
    //horizontales
      case (P1.valor)&&(P4.valor)&&(P7.valor):
   setGanador("jugador 1 gana")
    break;
      case (P2.valor)&&(P5.valor)&&(P8.valor):
   setGanador("jugador 1 gana")
    break;
      case (P3.valor)&&(P6.valor)&&(P9.valor):
   setGanador("jugador 1 gana")
    break;
    //diagonal
         case (P3.valor)&&(P5.valor)&&(P9.valor):
   setGanador("jugador 1 gana")
    break;
         case (P1.valor)&&(P5.valor)&&(P9.valor):
   setGanador("jugador 1 gana")
    break;
         case (P3.valor)&&(P5.valor)&&(P7.valor):
   setGanador("jugador 1 gana")
    break;
  default:
    break;
}
}
 



  if (Contador===9) {
    alert("se acabo")
  }
  console.log(Ganador)
  return (
    <div className="main">
   <div className="wrapper">
       <div className="container">
           <button className="button-option"disabled={P1.disable}  onClick={(e) => { Click_En_Posición(e,setP1)}}>{P1.display} </button>
           <button className="button-option"disabled={P2.disable}  onClick={(e) => { Click_En_Posición(e,setP2)}}>{P2.display} </button>
           <button className="button-option"disabled={P3.disable}  onClick={(e) => { Click_En_Posición(e,setP3)}}>{P3.display} </button>
           <button className="button-option"disabled={P4.disable}  onClick={(e) => { Click_En_Posición(e,setP4)}}>{P4.display} </button>
           <button className="button-option"disabled={P5.disable}  onClick={(e) => { Click_En_Posición(e,setP5)}}>{P5.display} </button>
           <button className="button-option"disabled={P6.disable}  onClick={(e) => { Click_En_Posición(e,setP6)}}>{P6.display} </button>
           <button className="button-option"disabled={P7.disable}  onClick={(e) => { Click_En_Posición(e,setP7)}}>{P7.display} </button>
           <button className="button-option"disabled={P8.disable}  onClick={(e) => { Click_En_Posición(e,setP8)}}>{P8.display} </button>
           <button className="button-option"disabled={P9.disable}  onClick={(e) => { Click_En_Posición(e,setP9)}}>{P9.display} </button>

       </div>
       <div className="submenu"> 
       <button id="restart">jugador 1</button>
       <button id="restart">jugador 2</button>
       <button id="restart">Inicio</button>
       <button id="restart">Restart</button>
       </div>
   </div>
   <div className="popup hide">
       <p id="message">TICK TACK TOE</p>
       <button id="juego_nuevo">Jugador VS jugador </button>
       <button id="dos_jugadores">Jugador vs Computador</button>
       <button id="vs_computadora">Empezar</button>
   </div>
          
   <div className="popup2 hide">
       <input className="inputJugador" placeholder="Jugador 1"/>       
       <input className="inputJugador" placeholder="Jugador 2"/>       
       <button id="vs_computadora">Empezar</button>
   </div>
          
    </div>

  );
}

export default App;
