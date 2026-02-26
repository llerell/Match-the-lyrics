/**
 * Displays the hidden and guessed words of a song, with correct punctuation.
 * 
 * every word, whitespace and punctuation is mapped to its div verse by verse.
 * @param {*} param0
 * @returns display component
 */
export function SongDisplay({lyricsSet, guessedWords, verses}) {
    return (
        <div className="lyrics">
            {lyricsSet && verses.map((verse, verseIndex) => (
                
                <div key={verseIndex} className={verse == null ? "empty-verse" : "verse"}>
                    {verse && verse.map((pos, posIndex) => {
                        
                        const isWord = lyricsSet.has(pos.toLowerCase());
                        const word = (!isWord || guessedWords.includes(pos.toLowerCase())) ? pos : "_".repeat(pos.length);

                        return (
                            <span
                                key={posIndex}
                                className={isWord ? (guessedWords.includes(pos.toLowerCase()) ? "guessed" : "hidden") : "punctuation"}
                                style={{ whiteSpace: "pre-wrap" }}>
                                {word}
                            </span>
                        )
                        // qui a eu la bonne idée de cacher les whitespaces par défaut..?
                    })}   
                </div>

            ))
            }
        </div>
    )
}   