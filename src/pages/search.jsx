import { Link } from "react-router-dom";

export default function Search() {

    // Pour l'instant il n'y a que quelques chansons, il faudra déterminer comment récupérer une liste ou la liste qui nous intéresse
    const songs = [
        {
            idSong: 1,
            name: "Wildest Dreams",
        },

        {
            idSong: 3,
            name: "Dusk Till Dawn",
        }
    ];

    return (
        <div>
            <div>Search page</div>


            <nav>
            {songs.length ? (    // Si il y a des chansons
                <ul>                
                    {songs.map((song) => (    // On crée une liste de chansons à partir du tableau songs
                        // La clé de chaque élément de la liste est l'id de la chanson
                        // Et chaque élément de la liste appelera un URL particulier (avec Link)
                        <li key={song.idSong}>
                            <Link to={`../song/${song.idSong}`}>
                                    <>
                                        {song.name}
                                    </>
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (   // Si il n'y a pas de chansons on affiche qu'il n'y en a pas
                <p>
                    <i> No song </i>
                </p>
            )}
        </nav>

        </div>
    )
}