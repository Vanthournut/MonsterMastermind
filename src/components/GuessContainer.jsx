import Guess from './Guess'
import GuessLog from './GuessLog'

export default function GuessContainer() {
    return <>
        <Guess></Guess>
        <table>
            <tr>
                <th>
                    Str
                </th>
                <th>
                    Dex
                </th>
                <th>
                    Con
                </th>
                <th>
                    Int
                </th>
                <th>
                    Wis
                </th>
                <th>
                    Cha
                </th>
            </tr>
        </table>
        {/*Move to end of table later*/}
        <GuessLog></GuessLog>
    </>
}