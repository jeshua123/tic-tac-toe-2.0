
import { useState,useEffect } from "react";

function App() {
const [Turno, setTurno] = useState(true)

const [Contador, setContador] = useState(0)

const [jugador_1, setjugador_1] = useState("jesus")

const [score1, setscore1] = useState(0)

const [jugador_2, setjugador_2] = useState("pepe")

const [score2, setscore2] = useState(0)



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
setFun(() => { return {display:Turno?"x":"o",disable:true,valor:Turno?"x":"o"} })
cambioTurno()
setContador(Contador+1)
}

function revisa_Ganador() {
  
  let posiciones =[
  [P1.valor,P2.valor,P3.valor],
  [P4.valor,P5.valor,P6.valor],
  [P7.valor,P8.valor,P9.valor],
  [P1.valor,P4.valor,P7.valor],
  [P2.valor,P5.valor,P8.valor],
  [P3.valor,P6.valor,P9.valor],
  [P1.valor,P5.valor,P9.valor],
  [P3.valor,P5.valor,P7.valor] ]


  posiciones.forEach((iter) => {
    if (iter[0] && iter[0] === iter[1] && iter[0] === iter[2]) {
      console.log("Ganador encontrado:", iter[0]);

      if (iter[0] === "x") {
        setscore1((prev) => prev + 1);
      } else if (iter[0] === "o") {
        setscore2((prev) => prev + 1);
      }
    }


return
} ) }
 

useEffect(() => {
  
    revisa_Ganador();
  
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [P1.valor, P2.valor, P3.valor, P4.valor, P5.valor, P6.valor, P7.valor, P8.valor, P9.valor,]);

  
 
  console.log(Contador)
  console.log(score1,score2)

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
       <button id="restart"> {jugador_1+" ="+score1} </button>
       <button id="restart">{jugador_2+" = "+score2}</button>
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
