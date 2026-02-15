export function extractCleanedLyrics(chanson) {
    let lyrics = chanson.plainLyrics;
    console.log("splitting...");
    let words = new Set;
    words = new Set(lyrics.toLowerCase().match(/\b[\w'-]+\b/g));
    return words
}


export function extractCompleteVerses(chanson) {
    let lyrics = chanson.plainLyrics;
    let verses = lyrics.split("\n");
    let versesElements = []; // stocke les mots, les espaces et la ponctuation 
    for (let i=0; i<verses.length; i++) {
        let element = verses[i].match(/\b[\w'-]+\b|[^\w\s]|[\s]/g);
        versesElements.push(element)
    }
    console.log(versesElements)
    return versesElements;
}

    /*

    let verses = lyrics.split("\n")
    for(let i=0; i<verses.length; i++) {
        words.add(verses[i].toLowerCase().match(/\b[\w'-]+\b/g) || []);
    }
    console.log("split");

    
    let list = document.getElementById("lyrics");

    for(let i=0; i<words.length; i++) {
        const verse = document.createElement('div');
        verse.className = "verse";
        verse.id = `verse:${i}`;

        for(let j=0; j<words[i].length; j++) {
            const word = document.createElement('div');
            word.className = 'word';
            word.id = `word:${i}:${j}`;
            word.textContent = words[i][j];
            //word.style.visibility = "hidden";
        
            verse.appendChild(word);
        }

        verse.style.visibility = "hidden";

        list.appendChild(verse);
        
        //showLyrics(words[i]);
        
    }
    
*/
