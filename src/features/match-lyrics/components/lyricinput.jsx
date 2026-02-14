export function inputLyric(word, guessedWords){
    if (lyricsSet.has(word)){
        if (!guessedWords.includes(word)){
            setGuessedWords([...guessedWords, word]);
            console.log("correct guess")
        }
    } else {
        console.log("Nope");
    }
}
