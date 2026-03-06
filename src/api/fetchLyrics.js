export async function fetchData(id) {
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

