export function extractLyrics(chanson) {
    let lyrics = chanson.plainLyrics;
    console.log("splitting...");
    let verses = lyrics.split("\n")
    let words = new Set;
    for(let i=0; i<verses.length; i++) {
        words.push(verses[i].toLowerCase().match(/\b[\w'-]+\b/g) || []);
    }
    console.log("split");
    console.log(words);

    return words;
    /*
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
}
