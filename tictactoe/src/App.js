import {useEffect } from "react";
import { Routes, Route,useNavigate } from 'react-router';
import "./App.css";
import Menu from "./components/Menu";
import Juego from './components/Juego';
import Nombres from './components/Nombres';

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
      </Routes>
    </div>
  );
}

export default App;
