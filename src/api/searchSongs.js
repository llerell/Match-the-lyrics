export function parseQuery(query) {
    // TODO: changer les %20 en + ?
    let track_name = query.split("&")[0];
    let artist_name = query.split("&")[1];
    return `artist_name=${artist_name}&track_name=${track_name}`;
}

export async function searchSongs(query) {
    console.log("searching...");
    console.log("query:", parseQuery(query));
    try {
        const response = await fetch(`https://lrclib.net/api/search?${parseQuery(query)}`);
        if (!response.ok) {
            throw new Error(`Server error: ${response.status} ${response.statusText}`);
        }
        console.log("search done");
        return await response.json();
    } catch (error) {
        console.error("Failed to fetch data:", error);
        throw error; // Re-throw the error to handle it in the calling function
    }
}