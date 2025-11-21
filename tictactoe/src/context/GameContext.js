import { createContext, useState, useEffect } from "react";

export const GameContext = createContext();

export function GameProvider({ children }) {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState(null);
  const [winningCells, setWinningCells] = useState([]);
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [mode, setMode] = useState("");
  const [jugador1, setJugador1] = useState("");
  const [jugador2, setJugador2] = useState("");
  const [step, setStep] = useState("menu");
  const [habilitarVolver, setHabilitarVolver] = useState(false);
  const [partidaActual, setpartidaActual] = useState(false)
  const [partidasGuardadas, setpPastidasGuardadas] = useState([])


  // Reiniciar tablero
  const resetBoard = () => {
    setBoard(Array(9).fill(""));
    setTurn("X");
    setWinner(null);
    setWinningCells([]);
    setHabilitarVolver(false)
  };

  // Reiniciar todo
  const resetGame = () => {
    setJugador1("");
    setJugador2("");
    setScore1(0);
    setScore2(0);
    resetBoard();
    setMode("");
    setStep("menu");
    if(partidaActual){setpPastidasGuardadas(prev => [...prev, partidaActual]);}
    setpartidaActual(false)
  };

  // Manejo de jugada

  const handleClick = (index) => {
    if (board[index] !== "" || winner) return;
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    setTurn(turn === "X" ? "O" : "X");
    setHabilitarVolver(true)
  };

  // IA media
  const pcMove = () => {
    const newBoard = [...board];
    const winIndex = findBestMove(newBoard, "O");
    if (winIndex !== -1) { newBoard[winIndex] = "O"; setBoard(newBoard); setTurn("X"); return; }
    const blockIndex = findBestMove(newBoard, "X");
    if (blockIndex !== -1) { newBoard[blockIndex] = "O"; setBoard(newBoard); setTurn("X"); return; }
    const empty = newBoard.map((v,i)=>v===""?i:null).filter(v=>v!==null);
    if (empty.length>0) { newBoard[empty[Math.floor(Math.random()*empty.length)]] = "O"; setBoard(newBoard); setTurn("X"); }
  };

  const findBestMove = (b, player) => {
    const combos = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ];
    for(let c of combos){
      const [a,b1,c1] = c;
      if(b[a]===player && b[b1]===player && b[c1]==="") return c1;
      if(b[a]===player && b[c1]===player && b[b1]==="") return b1;
      if(b[b1]===player && b[c1]===player && b[a]==="") return a;
    }
    return -1;
  };

  //Guarda Partidas


  // Revisa ganador
  useEffect(() => {
    const combos = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ];
    for (let c of combos) {
      const [a,b1,c1] = c;
      if (board[a] && board[a] === board[b1] && board[a] === board[c1]) {
        setWinner(board[a]);
        setWinningCells([a,b1,c1]);
        if (board[a] === "X") setScore1(s=>s+1); else setScore2(s=>s+1);
        return;
      }
    }
    if (board.every(cell => cell !== "") && !winner) {
      setWinner("Empate");
    }
  }, [board]);

  useEffect(() => {
  if (step==="juego") {
    const nuevaPartida = {
      jugador1,
      jugador2,
      score1,
      score2
    };

    setpartidaActual(nuevaPartida);
  }
}, [step,score1,score2]);
  
  // Movimiento del PC
  useEffect(() => {
    if (mode === "pc" && turn === "O" && !winner) {
      const timer = setTimeout(() => pcMove(), 600);
      return () => clearTimeout(timer);
    }
  }, [turn, mode, winner]);
  
  return (
    <GameContext.Provider
      value={{
        step, setStep, mode, setMode,
        jugador1, setJugador1, jugador2, setJugador2,
        score1, score2,
        board, turn, winner, winningCells,
        handleClick, resetBoard, resetGame,
        habilitarVolver,partidasGuardadas,partidaActual
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
