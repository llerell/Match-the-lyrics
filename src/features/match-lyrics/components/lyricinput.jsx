export function guessLyric(e, guessedWords, lyricsSet, setGuessedWords, guess, setGuess){
    const word = e.target.value;
    if (lyricsSet.has(word)){
        if (!guessedWords.includes(word.toLowerCase())){
            setGuessedWords([...guessedWords, word]);
            console.log("correct guess")
            setGuess("");
        }
    } else {
        console.log("Nope");
    }
}
