import { useState } from 'react'
import { languages } from './assets/languages'
import { targetWord } from './assets/targetWord'
import { getFarewellText } from './assets/utils'

import { nanoid } from 'nanoid'

function AseemblyEndgame() {
  //state values
  const [currentWord, setCurrentWord] = useState(targetWord[Math.floor(Math.random() * targetWord.length)])
  const [inputArr, setInputArr] = useState([])

  //derived values
  const wrongGuessCount = inputArr.filter(letter => !currentWord.includes(letter)).length;
  console.log(wrongGuessCount)

  //--determine the game status
  const isInputSucceed = isSuperset(new Set(inputArr), new Set(currentWord));
  let game = isInputSucceed && wrongGuessCount < 8
    ? 1
    : wrongGuessCount >= 8
      ? -1
      : 0; if (wrongGuessCount >= 8) {
        game = -1
      } else;//0--normal,1--game won, -1--game lose
  const buttonStatus = game == 0 ? 'card-hidden' : '';
  const cardStatus = game == 1 ? 'win' : (game == -1 ? 'lose' : 'norm')

  //static values
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'


  //construct the language borad
  const languagesEle = languages.map((lan, index) => {
    const classString = index < wrongGuessCount ? 'chip chip-dead' : 'chip'
    return <span
      key={nanoid()}
      className={classString}
      style={{ backgroundColor: lan.backgroundColor, color: lan.color }}>{lan.name}
    </span>
  })

  //construct the current word screen
  const letterEle = currentWord.split('').map(letter => {
    const classString = inputArr.includes(letter) ? 'result-letter' : 'result-letter hidden'
    return <span
      key={nanoid()}
      className={classString}
      aria-label={`Letter ${letter}`}
    >
      {letter.toUpperCase()}
    </span>
  }
  )

  //construct the key borads
  const keysEle = alphabet.split('').map(letter => {
    const isClicked = inputArr.includes(letter);
    const isRightLetter = inputArr.includes(letter) && currentWord.split('').includes(letter)
    let classString = 'keyboard-letter'

    if (isClicked) {
      classString = isRightLetter ? 'keyboard-letter keyboard-right-letter' : 'keyboard-letter keyboard-wrong-letter';
    }


    return <button key={letter} className={classString} onClick={() => getInput(letter)}>
      {letter.toUpperCase()}
    </button>
  }

  )




  //funcitons--------------------------
  function getInput(letter) {
    if (game == 0) {
      setInputArr(preArr =>
        preArr.includes(letter) ? preArr :
          [...preArr, letter])
    }

  }

  function isSuperset(setA, setB) {
    for (let elem of setB) {
      if (!setA.has(elem)) {
        return false;
      }
    }
    return true;
  }
  function replay() {
    setInputArr([]);
    setCurrentWord(targetWord[Math.floor(Math.random() * targetWord.length)])
  }
  function displayNote() {
    return (
      <>
        {game === 0 && wrongGuessCount === 0 && <p>Click the keyboard to start guessing ✊</p>}
        {
          game === 0 && wrongGuessCount > 0 && wrongGuessCount <= languages.length && !currentWord.includes(inputArr[inputArr.length - 1]) && (
            <p>{getFarewellText(languages[wrongGuessCount - 1].name) + ' 😭'}</p>
          )
        }
        {
          game === 0 && wrongGuessCount > 0 && wrongGuessCount <= languages.length && currentWord.includes(inputArr[inputArr.length - 1]) && (
            <p>🎉You chose the right letter🎉</p>
          )
        }

        {game == 1 && <h2>You Win!</h2>}
        {game == -1 && <h2>You Lose!</h2>}
        {game == 1 && <p>Well Done👍!</p>}
        {game == -1 && <p>{`the answer is ${currentWord}`}</p>}
      </>
    )
  }


  return (
    <main>
      <header>
        <h1>
          Assembly Endgame
        </h1>
        <p>Guess the word within 8 attemps to keep the programming world safe from Assembly</p>

      </header>

      <section aria-live='polite' role='status ' className={'game-status ' + cardStatus}>
        {displayNote()}
      </section>
      <section className='language-chips'>
        {languagesEle}
      </section>
      <section className='word'>
        {letterEle}
      </section>
      <section className='keyboard'>
        {keysEle}
      </section>
      <button className={'new-game-btn ' + buttonStatus} onClick={replay}>New Game</button>
    </main>
  )
}

export default AseemblyEndgame
