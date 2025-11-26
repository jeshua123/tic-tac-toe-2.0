import { useContext } from "react";
import { GameContext } from './../context/GameContext';
import { Link } from 'react-router';


function Nombres() {
  const {
    setStep, mode, jugador1, setJugador1, jugador2, setJugador2, } = useContext(GameContext);
  return (
    <div className="menu">
      <h2>Ingresa los nombres</h2>
      <input placeholder="Jugador 1" value={jugador1} onChange={e => setJugador1(e.target.value)} />
      {mode === "jugador" && (
        <input placeholder="Jugador 2" value={jugador2} onChange={e => setJugador2(e.target.value)} />
      )}
      <Link to="/juego">
        <button disabled={!jugador1 || (mode === "jugador" && !jugador2)} onClick={() => setStep("juego")}>
          Empezar
        </button>
      </Link>
      <Link to="/">
        <button >Volver al inicio</button>
      </Link>
    </div>
  )
}

export default Nombres