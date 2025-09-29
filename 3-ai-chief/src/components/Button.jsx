import { useState } from 'react'

export default function Button({ id, color, isOn, clickFn: toggle }) {



    const [selfState, changeSelfState] = useState(isOn)


    function handleClick1() {
        changeSelfState(preState => !preState)
    }
    function handleClick2() {
        toggle(id)
    }

    let classNameForEach = isOn ? 'on' : '';
    classNameForEach += ' pads-btn'
    console.log('rerendered!')
    return (
        <button style={{ backgroundColor: color }} id={`btn-${id}`} className={classNameForEach} onClick={handleClick2} ></button>
    )
}