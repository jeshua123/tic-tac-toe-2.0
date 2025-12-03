import { useContext } from "react";
import { GameContext } from "../context/GameContext";
import { Link } from "react-router-dom";

export default function TablaPuntuacion() {
  const { partidasGuardadas, partidaActual,resetGame} = useContext(GameContext);
  const { jugador1, jugador2, score1, score2 } = partidaActual


  const noHayPartidas = !partidasGuardadas || partidasGuardadas.length === 0;

  return (
    <div className="puntajes">
      <h2>Tabla de Puntuaciones</h2>
      {noHayPartidas  ? (
       !partidaActual && (<p>No hay partidas registradas aún.</p>) 
      ) : (
      
<div className="tabla-responsive ">
    
        <table className="tabla">

          <tbody>
            {partidasGuardadas.map(
              ({ jugador1, jugador2, score1, score2 }, index) => (
                <tr key={`${jugador1}-${jugador2}-${index}`}>
                  <td className="jugador jugador1">{jugador1}</td>
                  <td className="puntaje puntaje1">{score1}</td>
                  <td className="versus">vs</td>
                  <td className="jugador jugador2">{jugador2}{!jugador2 && "PC"}</td>
                  <td className="puntaje puntaje2">{score2}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
</div>
      )}
      {partidaActual && (<>
      
      <h2>Juego actual</h2>

<div className="tabla-responsive ">
        <table className="tabla">

<thead>
  <tr>
    <th className="actual-jugador actual-jugador1">{jugador1}</th>
    <th className="actual-jugador actual-jugador1">{score1}</th>
    <th>vs</th>
    <th className="actual-jugador actual-jugador2">{jugador2 || "PC"}</th>
    <th className="actual-jugador actual-jugador2">{score2}</th>
  </tr>
</thead>

      </table> 

</div>
        <Link to="/juego">
        <button >Volver Partida actual</button>
      </Link>  </>) }

      <Link to="/">
        <button onClick={() => {resetGame()}}>Inicio</button>
      </Link>

    </div>
  );
}
