import React from 'react'
import { useGame } from '../contexts/GameContext'

function Score() {
    const { score } = useGame();
  return (
    <div>Score : { score }</div>
  )
}

export default Score