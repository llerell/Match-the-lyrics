export function inputLyric(word, lyricSet){
    const [guessedWords, setGuessedWords] = useState([]);
    if (lyricsSet.has(word)){
        if (!guessedWords.includes(word)){
            setGuessedWords([...guessedWords, word]);
            console.log("correct guess")
        }
    } else {
        console.log("Nope");
    }
}