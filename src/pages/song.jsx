import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import '../App.css'
import { loadData, showNextVerse } from "../script.js"
import { useParams } from "react-router";


function Song() {
    const song = {
        name: "Name",
        idSong: useParams().id, // Récupère le paramètre id dans l'URL
    }

  return (
    <>
      <div>
        
      </div>
      <h1></h1>
      <div className="card">
        <button onClick={() => loadData(song.idSong)}>
          Start
        </button>
        <button onClick={() => showNextVerse()}>
          Next verse
        </button>
        <button onClick={() => showNextWord()}>
          Next word
        </button>
      </div>

      <div id="lyrics">

      </div>
    </>
  )
}

export default Song