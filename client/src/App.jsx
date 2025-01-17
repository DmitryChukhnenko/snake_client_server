import './App.css'
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom"

import HomePage from "./pages/HomePage"
import Game from "./pages/Game";
import Secret from "./pages/Secret";
import Navbar from "./pages/Navbar";
import NoPage from "./pages/NoPage";

const router = createBrowserRouter([
    {       
        path: "/", 
        element: <NavbarWrapper/>,
        children:[
            {
                path: "/",
                element: <HomePage />  // Root?
            },
            {
                path: "/game",
                element: <Game />
            },
            {
                path: "/secret",
                element: <Secret />
            },
            {
                path: "*",
                element: <NoPage />
            },
        ]
    }
])

function NavbarWrapper(){
    return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
    )
};

function App(props) {
    return (
        <div>
            <RouterProvider router={router}/>
        </div>
  )
}

export default App
