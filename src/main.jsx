import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import './style.css'
import Root from './pages/root.jsx'
import Search from './pages/search.jsx'
import Game from './pages/matchGame.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
    },

    {
        path: "search/:query",
        element: <Search />,
    },

    {
        path: "song/:id",
        element: <Game />,
    },
]);

// le double chargement est a piori causé par le StrictMode en mode développement, 
// donc n'aura pas lieu pendant un usage classique.
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
