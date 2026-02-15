import { loadData, showNextVerse } from "../../api/fetchLyrics.js"
import { guessLyric } from "./components/lyricinput.jsx"
import { useState, useEffect } from "react";
import {extractLyrics} from "./utils/lyricsProcessor.js"


function Game(){
    const [guessedWords, setGuessedWords] = useState([]);
    const [lyricsSet, setLyricsSet] = useState(null);
	const [guess, setGuess] = useState("");
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchLyrics() {
            try {
                const chanson = await loadData(1);
                const lyrics = extractLyrics(chanson);
                console.log("Successfully loaded data");
                setLyricsSet(lyrics);
				console.log("Lyrics set:", lyrics);
            } catch (err) {
                setError("Error loading data:", err);
            }
        }
        fetchLyrics();
    }, []); // [] pour que ça ne se lance qu'une fois au montage du composant

    return (
    <>
        <div className="card">
            {error && <p className="error">{error}</p> }
            <input
                type="text"
				value={guess}
                className="quizInput"
                disabled={!lyricsSet} // Désactive l'input tant que les paroles ne sont pas chargées
                onChange={(e) => {
					setGuess(e.target.value);
                    if (lyricsSet) {
                        guessLyric(e, guessedWords, lyricsSet, setGuessedWords, guess, setGuess);
                    } else {
                        console.log("Lyrics not loaded yet");
                    }
                }}
            ></input>
			{/*
            <button onClick={() => showNextVerse()}>Next verse</button>
            <button onClick={() => showNextWord()}>Next word</button>
			*/}
        </div>

        <div id="lyrics"></div>
    </>
  )
}

export default Game