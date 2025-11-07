import { useContext } from "react";
import { GameContext } from "./context/GameContext";
import { Routes, Route } from 'react-router';
import "./App.css";
import Menu from "./components/Menu";
import Juego from './components/Juego';
import Nombres from './components/Nombres';

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
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/nombres" element={<Nombres />} />
        <Route path="/juego" element={<Juego />} />
      </Routes>
    </div>
  );
}

export default App;
