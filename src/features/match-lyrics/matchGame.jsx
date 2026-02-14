
import { loadData, showNextVerse } from "../../api/fetchLyrics.js"
import { inputLyric } from "./utils/lyricsProcessor.js"


function Game(){
    
    return (
    <>
        <div>
        
      </div>
      <h1></h1>
      <div className="card">
        <input type="text" className='quizInput' onChange={() => inputLyric()}></input>
        <button 
        onClick={
            () => loadData()
        }>
          Start
        </button>
        <button 
        onClick={
            () => showNextVerse()
            }>
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

export default Game