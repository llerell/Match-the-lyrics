import {React} from "react";


export function LyricInput({guessedWords, lyricsSet, setGuessedWords, guess, setGuess, isLoading}){
    // Utilisation des props pour accéder à l'état et aux fonctions de mise à jour du composant parent.
    // -> evite les appels d'une fonction prenant tous ces arguments. 

    // TODO? vraie page de chargement
    if (isLoading){
        return <p>Loading...</p>
    }

    function guessLyric(e) {
        setGuess(e.target.value);
        const word = guess.toLowerCase();
        if (lyricsSet.has(word)){
            if (!guessedWords.includes(word)){
                setGuessedWords([...guessedWords, word]);
                console.log("correct guess")
                setGuess("");
            }
        } else {
            console.log("Nope");
        }
    }
    return (
        <>
            <input
                type="text"
				value={guess}
                className="quizInput"
                disabled={!lyricsSet} // Désactive l'input tant que les paroles ne sont pas chargées
                onChange={(e) => {
                    guessLyric(e);
                }}
            ></input>
        </>
    )
}