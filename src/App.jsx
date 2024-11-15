import { useState } from 'react'
import './App.css'
import GuessContainer from './components/GuessContainer'
import { monsters } from './data/monsters'

function App() {
  const answer = monsters[Math.floor(Math.random()*monsters.length)];
  return (
    <>
      <h1>Monster Mastermind</h1>
      <GuessContainer monsters={monsters} answer={answer}></GuessContainer>
    </>
  )
}

export default App
