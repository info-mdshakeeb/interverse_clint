import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";
import Resistation from "../Pages/Login/Resistation";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/home', element: <Home /> },

        ]
    },
    { path: '/login', element: <Login /> },
    { path: '/resistation', element: <Resistation /> },
    {
        path: '*', element: <ErrorPage />,
    }
])