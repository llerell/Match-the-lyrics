/**
 * Displays the hidden and guessed words of a song, with correct punctuation.
 * 
 * every word, whitespace and punctuation is mapped to its div verse by verse.
 * @param {*} param0
 * @returns display component
 */
export function SongDisplay({lyricsSet, guessedWords, verses}) {
    // Note: all variables act like booleans, that are true if they exist and false if null. 
    // lyricsSet && {action} does the action if lyricsSet exists. 
    return (
        <div id="lyrics">
            {lyricsSet && verses.map((verse, verseIndex) => (
                <div key={verseIndex} className="verse">
                    {verse && verse.map((pos, posIndex) => {
                        const posLower = pos.toLowerCase();

                        // alternative au Regex. 
                        // has() est en O(1), donc ça ne change pas grand chose.
                        const isWord = lyricsSet.has(pos)
                        // affiche les ponctuations, les espaces et les mots révélés
                        const word = (!isWord || guessedWords.includes(posLower)) ? pos : "_".repeat(pos.length);

                        return <span
                                key={posIndex} 
                                className={isWord ? (guessedWords.includes(posLower) ? "guessed" : "hidden") : "punctuation"} 
                                style={{ whiteSpace: "pre-wrap" }}>
                                    {word} 
                                </span>
                        // qui a eu la bonne idée de cacher les whitespaces par défaut..?
                    })}   
                </div>
            ))
            }
        </div>
    )
}   