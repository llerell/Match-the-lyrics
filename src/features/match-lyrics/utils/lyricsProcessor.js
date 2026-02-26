// le fichier entier pourrait être modifié pour améliorer la réusabilité.

/**
 * 
 * @param {*} chanson Promise containing a song.
 * @returns A set of all words found in the song
 */
export function extractCleanedLyrics(chanson) {
    let lyrics = chanson.plainLyrics;
    console.log("splitting...");
    let words = new Set;
    words = new Set(lyrics.toLowerCase().match(/\p{L}+/gu));
    return words
}

/**
 * 
 * @param {*} chanson Promise containing a song.
 * @returns Array of verses; each verse being an array of words, punctuation and whitespaces.
 */
export function extractCompleteVerses(chanson) {
    let lyrics = chanson.plainLyrics;
    let verses = lyrics.split("\n");
    let versesElements = []; // stocke les mots, les espaces et la ponctuation 
    for (let i=0; i<verses.length; i++) {
        let element = verses[i].match(/\p{L}+|[^\p{L}]/gu); // mots ou non-mots (espaces et ponctuation)
        versesElements.push(element)
    }
    console.log(versesElements)
    return versesElements;
}
