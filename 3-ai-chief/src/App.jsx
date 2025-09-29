
import { useState } from 'react';
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import SignupForm from './components/SignupForm.jsx';
import pads from './outside_files/pads.js'
import Button from './components/Button.jsx'

function App() {
  // const [padsState, changeState] = useState(pads)

  // function toggle(id) {
  //   console.log(id + 'clicked')
  //   changeState(preState => {
  //     return preState.map(pad => {
  //       if (pad.id === id) {
  //         return { ...pad, on: !pad.on }
  //       } else {
  //         return pad
  //       }
  //     })
  //   })
  // }
  return (
    <>
      <Header />
      <Main />


      {/* <SignupForm /> */}
      {/* <main>
        <div className="pad-container">
          {padsState.map((pad, index) => {
            return <Button
              key={pad.id}
              id={pad.id}
              color={pad.color}
              isOn={pad.on}
              clickFn={toggle} />
          })}
        </div>

      </main> */}

    </>
  )
}

export default App


