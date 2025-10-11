import React from 'react'

function Menu() {
  return (
    <>
        
        <div className="menu">
          <h2>Ingresa los nombres</h2>
          <input placeholder="Jugador 1" value={jugador1} onChange={e=>setJugador1(e.target.value)}/>
          {mode==="jugador" && <input placeholder="Jugador 2" value={jugador2} onChange={e=>setJugador2(e.target.value)}/>}
          <button disabled={!jugador1 || (mode==="jugador" && !jugador2)} onClick={()=>setStep("juego")}>Empezar</button>
                      <button onClick={resetGame}>Volver al inicio</button>

        </div>

    </>
  )
}

export default Menu