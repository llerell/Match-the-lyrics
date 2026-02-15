
async function fetchData(id) {
    console.log("fetching...");
    let promise = await fetch(`https://lrclib.net//api/get/${id}`);
    console.log("fetched");
    return await promise.json();
}

export async function loadData() {
    let chanson = await fetchData(1);
    return extractLyrics(chanson);
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

export function showNextVerse(words) {
    let verse = document.getElementById(`verse:${ind_verse}`);
    if (verse != null){
        verse.style.visibility = "visible";
    }
    for(let i=0; i<words[ind_verse]; i++) {
        let word = document.getElementById(`word:${ind_verse}:${i}`);
        word.style.visibility = "visible";
    }
    ind_verse++;
}

/* NEEDED ?
export function showNextWord() {
    if(ind_word < words[ind_verse].length) {
        let word = document.getElementById(`word:${ind_verse}:${ind_word}`);
        
    }

}
*/

