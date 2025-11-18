import { useContext } from "react";
import { GameContext } from './../context/GameContext';
import { Link } from 'react-router';


function Menu() {
      const {setStep, setMode} = useContext(GameContext);
  return (
        <div className="menu">
          <h1>TIC TAC TOE</h1>
       <Link to="/nombres">    
       <button onClick={() => { setMode("jugador"); setStep("nombres"); }}>
            Jugador vs Jugador
            </button>
            </Link>
            <Link to="/nombres"> 
          <button onClick={() => { setMode("pc"); setStep("nombres"); }}>
            Jugador vs PC
            </button>
            </Link>
            <Link to="/tablapuntuacion">
                    <button >Puntajes</button>
                </Link>
        </div>
  )
}

export default Menu