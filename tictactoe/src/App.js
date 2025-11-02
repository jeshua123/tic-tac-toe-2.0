import { useContext } from "react";
import { GameContext } from "./context/GameContext";
import "./App.css";

function App() {
  const {
    step, setStep, mode, setMode,
    jugador1, setJugador1, jugador2, setJugador2,
    score1, score2,
    board, winner, winningCells,
    handleClick, resetBoard, resetGame
  } = useContext(GameContext);

  return (
    <div className="main">
      {step === "menu" && (
        <div className="menu">
          <h1>TIC TAC TOE</h1>
          <button onClick={() => { setMode("jugador"); setStep("nombres"); }}>Jugador vs Jugador</button>
          <button onClick={() => { setMode("pc"); setStep("nombres"); }}>Jugador vs PC</button>
        </div>
      )}

      {step === "nombres" && (
        <div className="menu">
          <h2>Ingresa los nombres</h2>
          <input placeholder="Jugador 1" value={jugador1} onChange={e => setJugador1(e.target.value)} />
          {mode === "jugador" && (
            <input placeholder="Jugador 2" value={jugador2} onChange={e => setJugador2(e.target.value)} />
          )}
          <button disabled={!jugador1 || (mode === "jugador" && !jugador2)} onClick={() => setStep("juego")}>
            Empezar
          </button>
        </div>
      )}

      {step === "juego" && (
        <div className="game">
          <div className="scoreboard">
            <span>{jugador1 || "Jugador 1"} (X): {score1}</span>
            <span>{mode === "pc" ? "PC" : (jugador2 || "Jugador 2")} (O): {score2}</span>
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
            <button onClick={resetBoard}>Reiniciar ronda</button>
            <button onClick={resetGame}>Volver al inicio</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
