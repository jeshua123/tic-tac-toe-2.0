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
      {noHayPartidas ? (
        <p>No hay partidas registradas aún.</p>
      ) : (
        <table className="tabla">
          <thead>
            <tr>
              <th>Jugador 1</th>
              <th>Puntaje</th>
              <th></th>
              <th>Jugador 2</th>
              <th>Puntaje</th>
            </tr>
          </thead>

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

      )}
      {partidaActual && (<><h2>Juego actual</h2>
      <table className="tabla">

        <thead>
          <tr>
            <th>{jugador1}</th>
            <th>{score1}</th>
            <th >vs</th>
            <th>{jugador2}{!jugador2 && "PC"}</th>
            <th>{score2}</th>
          </tr>
        </thead>
      </table> 
        <Link to="/juego">
        <button >Volver Partida actual</button>
      </Link>  </>) }

      <Link to="/">
        <button onClick={() => {resetGame()}}>Inicio</button>
      </Link>

    </div>
  );
}
