
import { useState } from "react";

function App() {
const [Turno, setTurno] = useState(true)
const [Contador, setContador] = useState(0)
const [jugador_1, setjugador_1] = useState({nombre:"",puntaje:0})
const [jugador_2, setjugador_2] = useState({nombre:"",puntaje:0})

const [P1, setP1] = useState({
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
valor:"",
display:"",
disable:false})
function cambioTurno() {
  setTurno(!Turno)
}
function Click_En_Posición(e,P,setFun) {

setFun(() => { return {display:Turno?"x":"o",disable:true,valor:Turno} })
cambioTurno()
setContador(Contador+1)

}

let posiciones =[
  [P1.valor,P2.valor,P3.valor],
  [P4.valor,P5.valor,P6.valor],
  [P7.valor,P8.valor,P9.valor],
  [P1.valor,P4.valor,P7.valor],
  [P2.valor,P5.valor,P8.valor],
  [P3.valor,P6.valor,P9.valor],
  [P1.valor,P5.valor,P9.valor],
  [P3.valor,P5.valor,P7.valor] ]

  if (Contador>=5) {
    revisa_Ganador()
  }

function revisa_Ganador() {
  
posiciones.forEach((iter)=>{
 
if (iter[0] && iter[0] === iter[1] && iter[0] === iter[2]) {
  setjugador_1((jugador_1) => { jugador_1.puntaje++ })
}
if ((iter[0]===false) && (iter[0]===false) ===( iter[1]===false) && (iter[0]===false) === (iter[2]===false)) {
setjugador_2((jugador_2) => { jugador_2.puntaje++ })

}
 
})
  
}
 
  if (Contador===9) {
    alert("se acabo")
  }
  console.log(Contador)
  return (
    <div className="main">
   <div className="wrapper">
       <div className="container">
           <button className="button-option"disabled={P1.disable}  onClick={(e) => { Click_En_Posición(e,P1,setP1)}}>{P1.display} </button>
           <button className="button-option"disabled={P2.disable}  onClick={(e) => { Click_En_Posición(e,P2, setP2)}}>{P2.display} </button>
           <button className="button-option"disabled={P3.disable}  onClick={(e) => { Click_En_Posición(e,P3, setP3)}}>{P3.display} </button>
           <button className="button-option"disabled={P4.disable}  onClick={(e) => { Click_En_Posición(e,P4, setP4)}}>{P4.display} </button>
           <button className="button-option"disabled={P5.disable}  onClick={(e) => { Click_En_Posición(e,P5, setP5)}}>{P5.display} </button>
           <button className="button-option"disabled={P6.disable}  onClick={(e) => { Click_En_Posición(e,P6, setP6)}}>{P6.display} </button>
           <button className="button-option"disabled={P7.disable}  onClick={(e) => { Click_En_Posición(e,P7, setP7)}}>{P7.display} </button>
           <button className="button-option"disabled={P8.disable}  onClick={(e) => { Click_En_Posición(e,P8, setP8)}}>{P8.display} </button>
           <button className="button-option"disabled={P9.disable}  onClick={(e) => { Click_En_Posición(e,P9, setP9)}}>{P9.display} </button>

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
