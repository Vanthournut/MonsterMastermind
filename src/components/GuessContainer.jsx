import Guess from './Guess'
import GuessLog from './GuessLog'
import { monsters } from '../data/monsters'

export default function GuessContainer() {
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
        <Guess monsterList={monsters}/>
        <GuessLog></GuessLog>
    </>
}