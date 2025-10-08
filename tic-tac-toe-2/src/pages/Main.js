import React from 'react'

export default function Main({setMode,setStep}) {
  return (

     <div className="main">
      
        <div className="menu">
          <h1>TIC TAC TOE</h1>
          <button onClick={()=>{setMode("jugador"); setStep("nombres");}}>Jugador vs Jugador</button>
          <button onClick={()=>{setMode("pc"); setStep("nombres");}}>Jugador vs PC</button>
        </div>
        </div>
  )
}
