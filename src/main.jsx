import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import './index.css'
import Root from './pages/root.jsx'
import Search from './pages/search.jsx'
import Song from './pages/song.jsx'
//import App from './App.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,

    },

    {
        path: "searchSongs",
        element: <Search />,
    },

    {
        path: "song/:id",
        element: <Song />,
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
