import { useState } from 'react'
import './App.css'
import GuessContainer from './components/GuessContainer'
import { monsters } from './data/monsters'


const answer = monsters[Math.floor(Math.random()*monsters.length)];

function App() {

  return (
    <>
      <h1>Monster Mastermind</h1>
      <GuessContainer monsters={monsters} answer={answer}></GuessContainer>
    </>
  )
}

export default App
