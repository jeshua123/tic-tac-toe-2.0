
import { useState,useEffect } from "react";

function App() {
const [Turno, setTurno] = useState(true)

const [Contador, setContador] = useState(0)

const [jugador_1, setjugador_1] = useState("")

const [score1, setscore1] = useState(0)

const [jugador_2, setjugador_2] = useState("")

const [score2, setscore2] = useState(0)

const [posiciones, setposiciones] = useState(
  Array(9).fill(0).map(() => ({
    valor: "",
    display: "",
    disable: false
  }))
);

const [mostrarPopup, setmostrarPopup] = useState(false)

const [ganadorEncontrado, setganadorEncontrado] = useState(false)

function cambioTurno() {
  setTurno(!Turno)
}

function Click_En_Posición(index) {
  const nuevasposiciones=[...posiciones]

nuevasposiciones[index]={...nuevasposiciones[index],display:Turno?"x":"o",disable:true,valor:Turno?"x":"o"}

setposiciones(nuevasposiciones)

cambioTurno()

setContador(Contador+1)
}

function revisa_Ganador() {

  let combinaciones =[
  [posiciones[0].valor,posiciones[1].valor,posiciones[2].valor],
  [posiciones[3].valor,posiciones[4].valor,posiciones[5].valor],
  [posiciones[6].valor,posiciones[7].valor,posiciones[8].valor],
  [posiciones[0].valor,posiciones[4].valor,posiciones[6].valor],
  [posiciones[1].valor,posiciones[4].valor,posiciones[7].valor],
  [posiciones[2].valor,posiciones[5].valor,posiciones[8].valor],
  [posiciones[0].valor,posiciones[4].valor,posiciones[8].valor],
  [posiciones[2].valor,posiciones[4].valor,posiciones[6].valor] ]


  combinaciones.forEach((iter) => {
    if (iter[0] && iter[0] === iter[1] && iter[0] === iter[2]) {
      alert("parar")
      if (iter[0] === "x") {
        setscore1((prev) => prev + 1);
      } else if (iter[0] === "o") {
        setscore2((prev) => prev + 1);
      }
    }
return
} ) }
 
function restar() {
  setposiciones(Array(9).fill(0).map(() => ({
    valor: "",
    display: "",
    disable: false
  })));
  setTurno(true);
  setContador(0);
}

function reinicioOnClick() {
  restar()
  setjugador_1("")
  setjugador_2("")
  setmostrarPopup(!mostrarPopup)

}

function deshabilitar_Casillas() {
    let nuevasposiciones=[...posiciones]
  nuevasposiciones.forEach(iter =>  iter.disable=true)
  setposiciones(nuevasposiciones)
}
useEffect(() => {
    revisa_Ganador();
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [posiciones]);


    deshabilitar_Casillas();
// eslint-disable-next-line react-hooks/exhaustive-deps


console.log(mostrarPopup)
  return (
    <div className="main">
   <div className="wrapper">
       <div className="container">
           <button className="button-option"disabled={posiciones[0].disable}  onClick={(e) => { Click_En_Posición(0)}}>{posiciones[0].display} </button>
           <button className="button-option"disabled={posiciones[1].disable}  onClick={(e) => { Click_En_Posición(1)}}>{posiciones[1].display} </button>
           <button className="button-option"disabled={posiciones[2].disable}  onClick={(e) => { Click_En_Posición(2)}}>{posiciones[2].display} </button>
           <button className="button-option"disabled={posiciones[3].disable}  onClick={(e) => { Click_En_Posición(3)}}>{posiciones[3].display} </button>
           <button className="button-option"disabled={posiciones[4].disable}  onClick={(e) => { Click_En_Posición(4)}}>{posiciones[4].display} </button>
           <button className="button-option"disabled={posiciones[5].disable}  onClick={(e) => { Click_En_Posición(5)}}>{posiciones[5].display} </button>
           <button className="button-option"disabled={posiciones[6].disable}  onClick={(e) => { Click_En_Posición(6)}}>{posiciones[6].display} </button>
           <button className="button-option"disabled={posiciones[7].disable}  onClick={(e) => { Click_En_Posición(7)}}>{posiciones[7].display} </button>
           <button className="button-option"disabled={posiciones[8 ].disable}  onClick={(e) => { Click_En_Posición(8 )}}>{posiciones[8 ].display} </button>

       </div>
       <div className="submenu"> 
       <button id="restart"> {jugador_1+" ="+score1} </button>
       <button id="restart">{jugador_2+" = "+score2}</button>

       <button id="restart" onClick={(e) => { reinicioOnClick() }}>Inicio</button>

       <button id="restart" onClick={(e) => { restar() }}  >Restart</button>
       </div>
   </div>
   <div className={`popup ${mostrarPopup ? "show" : "hide"}`}>
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
