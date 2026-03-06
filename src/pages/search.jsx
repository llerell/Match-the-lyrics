import { Link } from "react-router-dom";
import { searchSongs } from "../api/searchSongs.js"
import { useParams } from "react-router";
import { useState, useEffect } from "react";

function Search() {

    let query = useParams().query;
    
    const [songsList, setSongsList] = useState([]);
    const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchSongs() {
            try {
            
                setIsLoading(true);
                const songs = await searchSongs(query);
                setSongsList(songs);

            } catch (err) {
            
                setError("Error loading data: " + err.message);
                console.log("Error loading data: " + err.message);

            } finally { // quel que soit le résultat

                setIsLoading(false);
            }
        }
        fetchSongs();
    }, []);

    return (
        <div>
            <p>Résultats de la recherche pour :</p>
            <p>{query.split("&")[0]} {query.split("&")[1]}</p>

            {songsList.length ? (    // Si il y a des chansons
                <div className="song-list">
                    {songsList.map((song) => (    // On crée une liste de chansons à partir du tableau songs

                        <div
                            className="song-card"
                            key={song.id}
                            onClick={() => window.location.href = `../song/${song.id}`}>
                                <p className="track-name">{song.trackName}</p>
                                <p className="album-name">{song.albumName}</p>
                                <p className="artist-name">{song.artistName}</p>
                        </div>
                    
                    ))}
                </div>
            ) : (   // Si il n'y a pas de chansons on affiche qu'il n'y en a pas
                <p>
                    <i> La recherche n'a retourné aucun résultat </i>
                </p>
            )}

        </div>
    )
}

export default Search;