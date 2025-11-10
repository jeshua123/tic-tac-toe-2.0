import {useEffect } from "react";
import { Routes, Route,useNavigate } from 'react-router';
import "./App.css";
import Menu from "./components/Menu";
import Juego from './components/Juego';
import Nombres from './components/Nombres';
import TablaPuntuación from './components/TablaPuntuación';

function App() {
  const navigate = useNavigate();

  const handleReload = () => {
    navigate('/');
  };
  
useEffect(() => {
handleReload()
}, [])


  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/nombres" element={<Nombres />} />
        <Route path="/juego" element={<Juego />} />
        <Route path="/tablapuntuacion" element={<TablaPuntuación />} />
      </Routes>
    </div>
  );
}

export default App;
