import { useContext } from "react";
import { GameContext } from './../context/GameContext';
import { Link } from "react-router-dom";

function Juego() {
    const {
        mode,
        jugador1, jugador2,
        score1, score2,
        board, winner, winningCells,
        handleClick, resetBoard, resetGame,
        habilitarVolver,partidaActual
    } = useContext(GameContext);
    console.log(partidaActual)
    return (
        <div className="game">
<div className="scoreboard">
  <div className="p1">
    <strong>{jugador1 || "Jugador 1"} (X)</strong>
    <span>{score1}</span>
  </div>

  <div className="p2">
    <strong>{mode === "pc" ? "PC" : jugador2 || "Jugador 2"} (O)</strong>
    <span>{score2}</span>
  </div>
</div>

            <div className="board">
                {board.map((cell, i) => (
                    <button
                        key={i}
                        className={`cell ${winningCells.includes(i) ? "winner" : ""}`}
                        onClick={() => handleClick(i)}
                        disabled={cell !== "" || winner}
                    >
                        {cell}
                    </button>
                ))}
            </div>

            <div className="controls">
                {winner && <h3>{winner === "Empate" ? "¡Empate!" : `${winner} ganó!`}</h3>}
               {habilitarVolver&& 
                <button onClick={resetBoard}>Reiniciar ronda</button>}
                <Link to="/">
                    <button onClick={resetGame}>Volver al inicio</button>
                </Link>
                <Link to="/tablapuntuacion">
                    <button >Puntajes</button>
                </Link>

            </div>
        </div>
    )
}

export default Juego