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
        habilitarVolver
    } = useContext(GameContext);
    return (
        <div className="game">
<div className="scoreboard">
  <span className="p1">{jugador1 || "Jugador 1"} (X): {score1}</span>
  <span className="p2">{mode==="pc" ? "PC" : jugador2 || "Jugador 2"} (O): {score2}</span>
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