
import { loadData, showNextVerse } from "../../api/fetchLyrics.js"
import { guessLyric } from "./components/lyricinput.jsx"
import { useState } from "react";


function Game(){
    try {
      
    const lyricSet = loadData();
    const [guessedWords, setGuessedWords] = useState([]);
    } catch (error) {
      console.log("Error loading data:", error);
    }

    for (let i=0; i<lyricSet.length; i++){
        console.log(lyricSet[i]);
    }

    return (
    <>
        <div>
        
      </div>
      <h1></h1>
      <div className="card">
        <input type="text" className='quizInput' onChange={e => guessLyric(e, guessedWords, lyricSet, setGuessedWords)}></input>
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