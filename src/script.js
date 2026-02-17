
async function fetchData(id) {
    console.log("fetching...");
    let promise = await fetch(`https://lrclib.net//api/get/${id}`);
    console.log("fetched");
    return await promise.json();
}

export async function loadData(id) {
    let chanson = await fetchData(id);
    extractLyrics(chanson);
}

let words = [];

function extractLyrics(chanson) {
    let lyrics = chanson.plainLyrics;
    console.log("splitting...");
    let verses = lyrics.split("\n")
    //let words = [];
    for(let i=0; i<verses.length; i++) {
        words.push(verses[i].toLowerCase().match(/\b[\w'-]+\b/g) || []);
    }
    console.log("split");
    console.log(words);

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
}


function showLyrics(line) {
    let list = document.getElementById("lyrics");

    const verse = document.createElement('div');
    verse.className = "verse";

    for(let i=0; i<line.length; i++) {
        const word = document.createElement('div');
        word.className = 'word';
        word.textContent = line[i];
        //word.style.visibility = "hidden";
    
        verse.appendChild(word);
    }

    verse.style.visibility = "hidden";

    list.appendChild(verse);
}

let ind_verse = 0;
let ind_word = 0;

export function showNextVerse() {
    let verse = document.getElementById(`verse:${ind_verse}`);
    verse.style.visibility = "visible";
    for(let i=0; i<words[ind_verse]; i++) {
        let word = document.getElementById(`word:${ind_verse}:${i}`);
        word.style.visibility = "visible";
    }
    ind_verse++;
}

export function showNextWord() {
    if(ind_word < words[ind_verse].length) {
        let word = document.getElementById(`word:${ind_verse}:${ind_word}`);
        
    }

}

