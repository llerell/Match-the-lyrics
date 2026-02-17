import './App.css'
import Game from "./features/match-lyrics/matchGame.jsx"

// Laissé pour qu'on puisse se servir des routers.
// Sinon cette fonction ne rajoute qu'une couche inutile. 
function App() {
  return (<Game/>)
}

export default App