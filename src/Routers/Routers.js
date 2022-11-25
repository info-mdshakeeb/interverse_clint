import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Addusedproduct from "../Pages/HomeComponents/Addusedproduct";
import ProductCatagory from "../Pages/HomeComponents/ProductCatagory";
import Login from "../Pages/Login/Login";
import Resistation from "../Pages/Login/Resistation";
import MyOrders from "../Pages/MyOrders";
import PrivateRoute from "../Routers/PrivateROute";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/home', element: <Home /> },
            {
                path: '/productcatagory/:id',
                loader: ({ params }) => fetch(`http://localhost:2100/productcatagory/${params.id}`),
                element: <PrivateRoute><ProductCatagory /></PrivateRoute>
            },
            { path: '/addusedproduct', element: <PrivateRoute><Addusedproduct /></PrivateRoute> },

        ]
    },
    { path: '/login', element: <Login /> },
    { path: '/resistation', element: <Resistation /> },
    { path: '/myorders', element: <MyOrders /> },
    {
        path: '*', element: <ErrorPage />,
    }
])