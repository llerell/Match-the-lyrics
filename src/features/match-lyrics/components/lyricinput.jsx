
/**
 * 
 * @param {*} param0 
 * @returns input component of the game
 */
export function LyricInput({guessedWords, lyricsSet, setGuessedWords, guess, setGuess, isLoading}){
    // Utilisation des props pour accéder à l'état et aux fonctions de mise à jour du composant parent.
    // -> evite les appels d'une fonction prenant tous ces arguments. 

    // TODO? vraie page de chargement
    if (isLoading){
        return <p>Loading...</p>
    }

    function guessLyric(e) {
        const value = e.target.value;
        setGuess(value);
        const word = value.toLowerCase(); 
        // si on utilise la variable guess au lieu de value, le setguess prend trop de temps et le reste du code est donc réalisé avant que ce soit terminé.

        if (lyricsSet.has(word)){
            if (!guessedWords.includes(word)){
                setGuessedWords([...guessedWords, word]);
                console.log("Correct guess")
                setGuess("");
            }
        } else {
            console.log("Input is not in song");
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