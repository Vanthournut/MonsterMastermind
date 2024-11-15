import Guess from './Guess'
import GuessLog from './GuessLog'
import { useState } from 'react'

export default function GuessContainer({monsters, answer}) {
    const [guesses, setGuesses] = useState([answer]);
    
    function handleSubmit(monster) {
        setGuesses((prevGuesses) => {
            return [
                monster,
                ...prevGuesses
            ];
        })
    }

    return <>
        <div className="guess">
            <h2 className="stat">Name</h2>
            <h2 className="stat">Str</h2>
            <h2 className="stat">Dex</h2>
            <h2 className="stat">Con</h2>
            <h2 className="stat">Int</h2>
            <h2 className="stat">Wis</h2>
            <h2 className="stat">Cha</h2>
            <h2 className="stat">Type</h2>
        </div>
        <Guess monsterList={monsters} onSubmit={handleSubmit}/>
        <GuessLog guesses={guesses} answer={answer}></GuessLog>
    </>
}