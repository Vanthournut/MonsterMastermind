import { useState } from "react";

export default function Guess({monsterList=[], monster=undefined, onSubmit=undefined, answer=undefined}) {
    const [selectedMonster, setSelectedMonster] = useState('');
    
    function handleChange(event) {
        setSelectedMonster(event.target.value)
    }

    function handleOnClick(monster) {
        setSelectedMonster('')
        if(onSubmit) {
            onSubmit(monster);
        }
    }

    function checkValidMonster(monster) {
        return monster.name === selectedMonster;
    }

    let monsterName;
    let monsterDatalist = <></>;
    let submitButton = <></>

    if(!monster) {
        monster = monsterList.find(checkValidMonster);
        monsterName = <input list="monsters" required value={selectedMonster} onChange={handleChange}></input>
        monsterDatalist = <datalist id="monsters">
            {monsterList.map((monster)=>{
                return <option key={monster.name} value={monster.name} />;
            })}
        </datalist>
        submitButton = <button disabled={monster ? false : true} onClick={()=>handleOnClick(monster)}>Submit</button>;
    } else {
        monsterName = <p className="stat">{monster.name}</p>
    }

    return <>
        <div className="guess">
            {monsterName}
            {monsterDatalist}
            <p className="stat">{monster ? monster.str : undefined}</p>
            <p className="stat">{monster ? monster.dex : undefined}</p>
            <p className="stat">{monster ? monster.con : undefined}</p>
            <p className="stat">{monster ? monster.int : undefined}</p>
            <p className="stat">{monster ? monster.wis : undefined}</p>
            <p className="stat">{monster ? monster.cha : undefined}</p>
            <p className="stat">{monster ? monster.type : undefined}</p>
        </div>
        {submitButton}
    </>
}