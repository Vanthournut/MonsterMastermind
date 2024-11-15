import { useState } from "react";


function checkAnswer(monster, answer) {

    const result = answer ? {
        name: getTag(monster.name, answer.name),
        size: getTag(monster.size, answer.size),
        type: getTag(monster.type, answer.type),
        cr: getTag(monster.cr, answer.cr),
        ac: getTag(monster.ac, answer.ac),
        str: getTag(monster.str, answer.str),
        dex: getTag(monster.dex, answer.dex),
        con: getTag(monster.con, answer.con),
        int: getTag(monster.int, answer.int),
        wis: getTag(monster.wis, answer.wis),
        cha: getTag(monster.cha, answer.cha)
    } : undefined;

    console.log(result)

    return result;
}

function getTag(l,r) {
    if(l === r) {
        return 'correct';
    } else if (typeof(l) === 'number' && typeof(r) === 'number' && l < r) {
        return 'higher';
    } else if (typeof(l) === 'number' && typeof(r) === 'number' && l > r) {
        return 'lower';
    } else {
        return 'incorrect';
    }
}

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
    let result = undefined;

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
        result = checkAnswer(monster, answer);
        monsterName = <p className={result ? "stat " + result.name : "stat"}>{monster.name}</p>
    }

    return <>
        <div className="guess">
            {monsterName}
            {monsterDatalist}
            <p className={result ? "stat " + result.str : "stat"}>{monster ? monster.str : undefined}</p>
            <p className={result ? "stat " + result.dex : "stat"}>{monster ? monster.dex : undefined}</p>
            <p className={result ? "stat " + result.con : "stat"}>{monster ? monster.con : undefined}</p>
            <p className={result ? "stat " + result.int : "stat"}>{monster ? monster.int : undefined}</p>
            <p className={result ? "stat " + result.wis : "stat"}>{monster ? monster.wis : undefined}</p>
            <p className={result ? "stat " + result.cha : "stat"}>{monster ? monster.cha : undefined}</p>
            <p className={result ? "stat " + result.type : "stat"}>{monster ? monster.type : undefined}</p>
        </div>
        {submitButton}
    </>
}