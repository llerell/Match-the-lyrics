export function guessLyric(e, guessedWords){
    const word = e.target.value;
    if (lyricsSet.has(word)){
        if (!guessedWords.includes(word)){
            setGuessedWords([...guessedWords, word]);
            console.log("correct guess")
        }
    } else {
        console.log("Nope");
    }
}
