import { useState, useEffect } from "react";
import "./App.css"; // Asegúrate de usar el CSS que te daré más abajo


function App() {
  const [step, setStep] = useState("menu"); // menu | nombres | juego
  const [mode, setMode] = useState(""); // jugador | pc

  const [jugador1, setJugador1] = useState("");
  const [jugador2, setJugador2] = useState("");
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);

  const [board, setBoard] = useState(Array(9).fill(""));
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState(null);
  const [winningCells, setWinningCells] = useState([]);

  // Reiniciar tablero
  const resetBoard = () => {
    setBoard(Array(9).fill(""));
    setTurn("X");
    setWinner(null);
    setWinningCells([]);
  };

  // Reiniciar todo
  const resetGame = () => {
    setJugador1("");
    setJugador2("");
    setScore1(0);
    setScore2(0);
    setBoard(Array(9).fill(""));
    setTurn("X");
    setWinner(null);
    setWinningCells([]);
    setMode("");
    setStep("menu");
  };

  // Manejo de jugada
  const handleClick = (index) => {
    if (board[index] !== "" || winner) return;
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    setTurn(turn === "X" ? "O" : "X");
  };

  // IA media
  const pcMove = () => {
    const newBoard = [...board];
    const winIndex = findBestMove(newBoard, "O");
    if (winIndex !== -1) { newBoard[winIndex] = "O"; setBoard(newBoard); setTurn("X"); return; }
    const blockIndex = findBestMove(newBoard, "X");
    if (blockIndex !== -1) { newBoard[blockIndex] = "O"; setBoard(newBoard); setTurn("X"); return; }

    const empty = newBoard.map((val,i)=>val===""?i:null).filter(v=>v!==null);
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

  // Revisa ganador
  useEffect(()=>{
    const combos = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ];
    for(let c of combos){
      const [a,b1,c1] = c;
      if(board[a] && board[a]===board[b1] && board[a]===board[c1]){
        setWinner(board[a]);
        setWinningCells([a,b1,c1]);
        if(board[a]==="X") setScore1(s=>s+1); else setScore2(s=>s+1);
        return;
      }
    }
    if(board.every(cell=>cell!=="") && !winner){
      setWinner("Empate");
    }
  },[board]);

  // PC move
  useEffect(()=>{
    if(mode==="pc" && turn==="O" && !winner){
      const timer = setTimeout(()=>pcMove(),600);
      return ()=>clearTimeout(timer);
    }
  },[turn,mode,winner]);

  // ---- RENDER ----
  return (
    <div className="main">
      {step==="menu" && (
        <div className="menu">
          <h1>TIC TAC TOE</h1>
          <button onClick={()=>{setMode("jugador"); setStep("nombres");}}>Jugador vs Jugador</button>
          <button onClick={()=>{setMode("pc"); setStep("nombres");}}>Jugador vs PC</button>
        </div>
      )}

      {step==="nombres" && (
        <div className="menu">
          <h2>Ingresa los nombres</h2>
          <input placeholder="Jugador 1" value={jugador1} onChange={e=>setJugador1(e.target.value)}/>
          {mode==="jugador" && <input placeholder="Jugador 2" value={jugador2} onChange={e=>setJugador2(e.target.value)}/>}
          <button disabled={!jugador1 || (mode==="jugador" && !jugador2)} onClick={()=>setStep("juego")}>Empezar</button>
        </div>
      )}

      {step==="juego" && (
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
      )}
    </div>
  );
}

export default App;
