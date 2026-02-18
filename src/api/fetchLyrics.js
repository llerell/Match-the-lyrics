/**
 * 
 * @param {*} id id of the song to fetch
 * @returns Promise containing the song.
 */
async function fetchData(id) {
    console.log("fetching...");
    try {
        const response = await fetch(`https://lrclib.net/api/get/${id}`);
        if (!response.ok) {
            throw new Error(`Server error: ${response.status} ${response.statusText}`);
        }
        console.log("fetched");
        return await response.json();
    } catch (error) {
        console.error("Failed to fetch data:", error);
        throw error; // Re-throw the error to handle it in the calling function
    }
}

/**
 * 
 * @returns Promise containing the song
 */
export async function loadData() {
     return await fetchData(1);
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

