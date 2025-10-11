import React from 'react'

function Juego() {
  return (
    <>

        <div className="game">
          <div className="scoreboard">
            <span>{jugador1 || "Jugador 1"} (X): {score1}</span>
            <span>{mode==="pc"?"PC":(jugador2||"Jugador 2")} (O): {score2}</span>
          </div>

          <div className="board">
            {board.map((cell,i)=>(
              <button key={i} className={`cell ${winningCells.includes(i)?"winner":""}`} onClick={()=>handleClick(i)} disabled={cell!==""||winner}>
                {cell}
              </button>
            ))}
          </div>

          <div className="controls">
            {winner && <h3>{winner==="Empate"?"¡Empate!":`${winner} ganó!`}</h3>}
            <button onClick={resetBoard}>Reiniciar ronda</button>
            <button onClick={resetGame}>Volver al inicio</button>
          </div>
        </div>
      

    </>
  )
}

export default Juego