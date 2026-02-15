import { useState, useEffect } from "react";
import { loadData } from "../../api/fetchLyrics.js"
import { extractLyrics, extractVerses } from "./utils/lyricsProcessor.js"
import { LyricInput } from "./components/lyricinput.jsx"
import { SongDisplay } from "./components/songdisplay.jsx"

function Game(){

    const [guessedWords, setGuessedWords] = useState([]);
    const [lyricsSet, setLyricsSet] = useState(null);
	const [guess, setGuess] = useState("");
    const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [verses, setVerses] = useState(null);

    useEffect(() => { // Nécessaire pour se connecter un système externe
        async function fetchLyrics() {
            try {

				setIsLoading(true);
                const song = await loadData(1);
                const lyrics = extractLyrics(song);
				const verses = extractVerses(song);
                setLyricsSet(lyrics);
				setVerses(verses);

                console.log("Successfully loaded data");

            } catch (err) {
                setError("Error loading data: " + err.message);
				console.log("Error loading data: " + err.message);

            } finally { // quel que soit le résultat
				setIsLoading(false);
			}
        }
        fetchLyrics();
    }, []); // [] pour que ça ne se lance qu'une fois au montage du composant

    return (
    <>
        <div className="card">
            {error && <p className="error">{error}</p> }
			<LyricInput
				guess={guess}
				setGuess={setGuess}
				guessedWords={guessedWords}
				setGuessedWords={setGuessedWords}
				lyricsSet={lyricsSet}
				isLoading={isLoading}
			/>
			<SongDisplay 
				lyricsSet={lyricsSet}
				guessedWords={guessedWords}
				verses={verses}
			/>
			{/*
            <button onClick={() => showNextVerse()}>Next verse</button>
            <button onClick={() => showNextWord()}>Next word</button>
			*/}
        </div>

    </>
  )
}

export default Game