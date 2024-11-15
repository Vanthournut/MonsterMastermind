import Guess from "./Guess"

export default function GuessLog({guesses}) {

    let logs = [...guesses];
    const answer = logs.pop();

    return <div className="log">
        {logs.map((guess) => {
            return <Guess key={guess.name} monster={guess} answer={answer}/>
        })}
    </div>
}