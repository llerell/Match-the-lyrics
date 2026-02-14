
import { loadData, showNextVerse } from "../../api/fetchLyrics.js"
import { inputLyric } from "./utils/lyricsProcessor.js"


export function Game(){
    const [count, setCount] = useState(0)
    return (
    <>
        <div>
        
      </div>
      <h1></h1>
      <div className="card">
        {/*<input type="text" className='quizInput' onChange={handleWordInput}></input>*/}
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