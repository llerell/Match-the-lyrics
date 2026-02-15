import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// le double chargement est a piori causé par le StrictMode en mode développement, 
// donc n'aura pas lieu pendant un usage classique.
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
