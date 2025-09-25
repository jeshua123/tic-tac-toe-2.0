import { useState, useEffect } from "react";
import "./App.css"; // Asegúrate de tener el CSS a continuación

function App() {
  const [Turno, setTurno] = useState(true);
  const [Contador, setContador] = useState(0);

  const [jugador_1, setjugador_1] = useState("");
  const [score1, setscore1] = useState(0);

  const [jugador_2, setjugador_2] = useState("");
  const [score2, setscore2] = useState(0);

  const [posiciones, setposiciones] = useState(
    Array(9).fill(0).map(() => ({
      valor: "",
      display: "",
      disable: false,
      isWinner: false,
    }))
  );

  const [mostrarmenu, setmostrarmenu] = useState(true);
  const [mostrarmenu2, setmostrarmenu2] = useState(false);

  const [hayganador, sethayganador] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [contraJugador, setcontraJugador] = useState(false);
  const [contraPc, setcontraPc] = useState(false);

  const [estaDeshabilitado, setestaDeshabilitado] = useState(true);
  const [estaDeshabilitado2, setestaDeshabilitado2] = useState(true);

  function Click_En_Posición(index) {
    if (hayganador) return;

    const nuevasposiciones = [...posiciones];
    if (nuevasposiciones[index].valor !== "") return;

    nuevasposiciones[index] = {
      ...nuevasposiciones[index],
      display: Turno ? "x" : "o",
      disable: true,
      valor: Turno ? "x" : "o",
    };

    setposiciones(nuevasposiciones);
    setTurno(!Turno);
    setContador((prev) => prev + 1);

    if (contraPc && Turno) {
      setTimeout(() => {
        jugadaPC();
      }, 500);
    }
  }

  function jugadaPC() {
    if (hayganador) return;

    const vacias = posiciones
      .map((pos, idx) => (pos.valor === "" ? idx : null))
      .filter((idx) => idx !== null);

    if (vacias.length === 0) return;

    const randomIndex = vacias[Math.floor(Math.random() * vacias.length)];

    const nuevasposiciones = [...posiciones];
    nuevasposiciones[randomIndex] = {
      ...nuevasposiciones[randomIndex],
      display: "o",
      disable: true,
      valor: "o",
    };

    setposiciones(nuevasposiciones);
    setTurno(true);
    setContador((prev) => prev + 1);
  }

  function revisa_Ganador() {
    if (hayganador) return;

    let combinaciones = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combo of combinaciones) {
      const [a, b, c] = combo;
      if (
        posiciones[a].valor &&
        posiciones[a].valor === posiciones[b].valor &&
        posiciones[a].valor === posiciones[c].valor
      ) {
        const nuevasposiciones = posiciones.map((pos, idx) => ({
          ...pos,
          isWinner: combo.includes(idx),
          disable: true,
        }));
        setposiciones(nuevasposiciones);

        if (posiciones[a].valor === "x") {
          setscore1((prev) => prev + 1);
          setMensaje(`${jugador_1 || "Jugador 1"} ganó!`);
        } else {
          setscore2((prev) => prev + 1);
          setMensaje(`${jugador_2 || "PC"} ganó!`);
        }

        sethayganador(true);
        return;
      }
    }

    if (Contador === 9 && !hayganador) {
      setMensaje("¡Empate!");
    }
  }

  function restar() {
    const posiciones_vacias = posiciones.map(() => ({
      valor: "",
      display: "",
      disable: false,
      isWinner: false,
    }));

    setposiciones(posiciones_vacias);
    setTurno(true);
    setContador(0);
    sethayganador(false);
    setMensaje("");
  }

  function reinicioOnClick() {
    restar();
    setjugador_1("");
    setscore1(0);
    setjugador_2("");
    setscore2(0);
    setmostrarmenu(true);
    setmostrarmenu2(false);
    setestaDeshabilitado(true);
    setestaDeshabilitado2(true);
    setcontraPc(false);
    setcontraJugador(false);
  }

  function recibirNombre(e, setState) {
    setState(e.target.value);
  }

  function click_Contra_jugador() {
    setcontraJugador(true);
    setestaDeshabilitado(false);
  }

  function click_Contra_Pc() {
    setcontraPc(true);
    setestaDeshabilitado(false);
  }

  useEffect(() => {
    revisa_Ganador();
  }, [posiciones]);

  useEffect(() => {
    if ((jugador_1 && jugador_2) || (jugador_1 && contraPc)) {
      setestaDeshabilitado2(false);
    }
  }, [jugador_1, jugador_2]);

  return (
    <div className="main">
      <p
        className={`mensaje ${
          mensaje.includes("ganó")
            ? mensaje.includes(jugador_1 || "Jugador 1")
              ? "x"
              : "o"
            : mensaje.includes("Empate")
            ? "empate"
            : ""
        }`}
      >
        {mensaje}
      </p>

      <div className="wrapper">
        <div className="container">
          {posiciones.map((pos, index) => (
            <button
              key={index}
              className={`button-option ${pos.isWinner ? "winner" : ""}`}
              disabled={pos.disable}
              onClick={() => Click_En_Posición(index)}
            >
              {pos.display}
            </button>
          ))}
        </div>

        <div className="submenu">
          <button id="restart">{jugador_1 + " =" + score1}</button>
          <button id="restart">
            {`${jugador_2 ? jugador_2 : "PC"} = ${score2}`}
          </button>

          <button id="restart" onClick={reinicioOnClick}>
            Inicio
          </button>

          <button id="restart" onClick={restar}>
            Restart
          </button>
        </div>
      </div>

      <div className={`menu_principal ${mostrarmenu ? "show" : "hide"}`}>
        <p id="message">TICKTACKTOE</p>
        <button id="juego_nuevo" onClick={click_Contra_jugador}>
          Jugador VS jugador
        </button>
        <button id="dos_jugadores" onClick={click_Contra_Pc}>
          Jugador vs Computador
        </button>
        <button
          id="vs_computadora"
          disabled={estaDeshabilitado}
          onClick={() => {
            setmostrarmenu(false);
            setmostrarmenu2(true);
          }}
        >
          Empezar
        </button>
      </div>

      <div className={`menu2 ${mostrarmenu2 ? "show" : "hide"}`}>
        <input
          className="inputJugador"
          placeholder="Jugador 1"
          value={jugador_1}
          onChange={(e) => recibirNombre(e, setjugador_1)}
        />
        <input
          className={`inputJugador ${contraPc ? "displayhide" : ""}`}
          placeholder="Jugador 2"
          value={jugador_2}
          onChange={(e) => recibirNombre(e, setjugador_2)}
        />
        <button
          id="vs_computadora"
          disabled={estaDeshabilitado2}
          onClick={() => {
            setmostrarmenu(false);
            setmostrarmenu2(false);
          }}
        >
          Empezar
        </button>
      </div>
    </div>
  );
}

export default App;
