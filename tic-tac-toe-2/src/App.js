
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
const [mostrarmenu, setmostrarmenu] = useState(true)
const [mostrarmenu2, setmostrarmenu2] = useState(false)

const [hayganador, sethayganador] = useState(false)
const [contraJugador, setcontraJugador] = useState(false)
const [contraPc, setcontraPc] = useState(false)

const [estaDeshabilitado, setestaDesabilitado] = useState(true);
const [estaDeshabilitado2, setestaDesabilitado2] = useState(true);


 
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

 if ( hayganador) return;
 
  let combinaciones =[
  [posiciones[0].valor,posiciones[1].valor,posiciones[2].valor],
  [posiciones[3].valor,posiciones[4].valor,posiciones[5].valor],
  [posiciones[6].valor,posiciones[7].valor,posiciones[8].valor],

  [posiciones[0].valor,posiciones[3].valor,posiciones[6].valor],
  [posiciones[1].valor,posiciones[4].valor,posiciones[7].valor],
  [posiciones[2].valor,posiciones[5].valor,posiciones[8].valor],
  
  [posiciones[0].valor,posiciones[4].valor,posiciones[8].valor],
  [posiciones[2].valor,posiciones[4].valor,posiciones[6].valor] ]


  combinaciones.forEach((iter) => {
    if (iter[0] && iter[0] === iter[1] && iter[0] === iter[2]) {
      if (iter[0] === "x") {
        setscore1((prev) => prev + 1);
      } else if (iter[0] === "o") {
        setscore2((prev) => prev + 1);
      }
     sethayganador(true)
     deshabilitar_Casillas()
    }
return
} ) }
 
function restar() {
  const posiciones_vacias = posiciones.map(() => ({
    valor: "",
    display: "",
    disable: false,
  }));

  setposiciones(posiciones_vacias);
  setTurno(true);
  setContador(0);
  sethayganador(false);
}

function reinicioOnClick() {
  restar()
  setjugador_1("")
  setscore1(0)
  setjugador_2("")
  setscore2(0)
  setmostrarmenu(!mostrarmenu)
  setestaDesabilitado(true)
  setestaDesabilitado2(true)
  setcontraPc(false)

}
function recibirNombre(e,setState) {
  let nombreJugador=e.target.value
  setState(nombreJugador)
}

function deshabilitar_Casillas() {
  const nuevasposiciones = posiciones.map(pos => ({ ...pos, disable: true }));
  setposiciones(nuevasposiciones);
}


function click_Contra_jugador() {
   setcontraJugador(true)
  setestaDesabilitado(false)
  }
function click_Contra_Pc() {
   setcontraPc(true)
  setestaDesabilitado(false)
  }
useEffect(() => {
    revisa_Ganador();
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [posiciones]);
useEffect(() => {
    if ((jugador_1&&jugador_2)||(jugador_1&&contraPc)) {
      setestaDesabilitado2(false)
    }
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [jugador_1,jugador_2]);

console.log(jugador_1)
console.log(jugador_2)
  return (
    <div className="main">
   <div className="wrapper">
<div className="container">
  {posiciones.map((pos, index) => (
    <button
      key={index}
      className="button-option"
      disabled={pos.disable}
      onClick={() => Click_En_Posición(index)}
    >
      {pos.display}
    </button>
  ))}
</div>

       <div className="submenu"> 
       <button id="restart"> {jugador_1+" ="+score1} </button>
       <button id="restart">{`${jugador_2?jugador_2:"PC"}`+" = "+score2}</button>

       <button id="restart" onClick={(e) => { reinicioOnClick() }}>Inicio</button>

       <button id="restart" onClick={(e) => { restar() }}  >Restart</button>
       </div>
   </div>
   <div className={`menu_principal ${mostrarmenu ? "show" : "hide"}`}>
       <p id="message">TICK TACK TOE</p>
       <button id="juego_nuevo" onClick={() => {click_Contra_jugador()}}>Jugador VS jugador </button>
       <button id="dos_jugadores" onClick={() => {click_Contra_Pc()}}>Jugador vs Computador</button>
       <button id="vs_computadora"disabled={estaDeshabilitado} onClick={() => {setmostrarmenu(false);setmostrarmenu2(true)}}>Empezar</button>
   </div>
          
   <div className={`menu2 ${mostrarmenu2 ? "show" : "hide"}`}>
       <input className="inputJugador" placeholder="Jugador 1" value={jugador_1} onChange={(e) => {recibirNombre(e,setjugador_1)}}/>       
       <input className= {`inputJugador ${contraPc ? "displayhide" :"" }`} placeholder="Jugador 2" value={jugador_2}onChange={(e) => {recibirNombre(e,setjugador_2)}}/>       
       <button id="vs_computadora" disabled={estaDeshabilitado2} onClick={() => {setmostrarmenu(false);setmostrarmenu2(false)}}>Empezar</button>
   </div>
          
    </div>

  );
}


export default App;
