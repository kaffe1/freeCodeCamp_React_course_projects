import Dice from './Dice'
import { useState, useEffect, useRef } from 'react'
import { nanoid } from 'nanoid'
function Main() {
    const [diceArr, setDiceArr] = useState(() => generateNewArr());
    let gameWon = false;
    if (diceArr.every(dice => dice.frozen) && diceArr.every(dice => dice.number === diceArr[0].number)) {
        gameWon = true
    }
    const rollDiceBtn = useRef(null);
    function generateNewArr() {
        console.log('genrated!')
        return new Array(10)
            .fill(0)
            .map(() => ({
                id: nanoid(),
                frozen: false,
                number: Math.ceil(Math.random() * 6)
            })

            )
    }
    function rollDice() {
        if (gameWon) {
            setDiceArr(preArr => preArr.map(dice => ({
                ...dice,
                frozen: false,
                number: Math.ceil(Math.random() * 6),
            })))

        }
        else {
            setDiceArr(preArr => preArr.map(dice => {
                if (!dice.frozen) {
                    return {
                        ...dice,
                        number: Math.ceil(Math.random() * 6),
                    };
                }
                return dice
            })
            )
        }
    }


    const diceGroupEle = diceArr.map((dice, index) => <Dice key={dice.id} diceIndex={index} number={dice.number} frozen={dice.frozen} diceArr={diceArr} setDiceArr={setDiceArr} />)

    //text in button
    const btnText = gameWon ? 'Play Again' : "Roll Dice";
    console.log('Main run! ')
    console.log(diceArr)

    useEffect(() => {
        if (gameWon)
            rollDiceBtn.current.focus();
    }, [gameWon])
    return (
        <>
            <div className="canvas">
                <div className='des-ctn'>
                    <h1>Tenzies</h1>
                    <p>Roll untill all dice are the smae. Click each die to freeze it at its current value between rolls</p>
                </div>
                <div className='dice-group'>
                    {diceGroupEle}
                </div>
                <button className='roll-dice-btn' onClick={rollDice} ref={rollDiceBtn}  > {btnText}</button>
            </div>
        </>
    )
}

export default Main;
