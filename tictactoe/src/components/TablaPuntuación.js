import React from 'react'
import { useContext } from 'react';
import { GameContext } from './../context/GameContext';

export default function TablaPuntuación() {
const{partidasGuardadas}=useContext(GameContext)


  return (
    <div>
        <h3>
            Tabla de Puntuaciones
        </h3>
<table >
  
<tbody>
  {partidasGuardadas.map(({jugador1,jugador2,score1,score2}) => {
    return (    
    <tr>
    <td>{jugador1} {score1} </td>
    <td> VS </td>
    <td>{jugador2} {score2} </td>
  </tr>)
  })}

</tbody>

</table>
    </div>
  )
}
