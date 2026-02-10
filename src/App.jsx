import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { loadData, showNextVerse } from "./script.js"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
      </div>
      <h1></h1>
      <div className="card">
        <button onClick={() => loadData()}>
          Start
        </button>
        <button onClick={() => showNextVerse()}>
          Next verse
        </button>
        <button onClick={() => showNextWord()}>
          Next word
        </button>
      </div>

      <div id="lyrics">

      </div>
    </>
  )
}

export default App
