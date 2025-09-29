import { useRef } from 'react'
function Dice(props) {
    function freezeDice() {
        const newFrozenState = !props.frozen;
        props.setDiceArr((preArr) => {
            const newArr = preArr.map((preDice, index) => ({
                ...preDice,
                frozen: props.diceIndex === index ? newFrozenState : preDice.frozen
            })
            )
            return newArr;
        })

    }

    const diceClass = props.frozen ? 'dice frozen' : 'dice';
    return (
        <button
            className={diceClass}
            onClick={freezeDice}
            aria-label={`Die with value ${props.value}, ${props.frozen ? 'held' : 'not held'}`}
            aria-pressed={props.frozen}
        >
            {props.number}
        </button>
    )
}

export default Dice;