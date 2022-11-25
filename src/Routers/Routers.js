import { createBrowserRouter } from "react-router-dom";
import Dashbord from "../Layout/Dashbord";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Addusedproduct from "../Pages/HomeComponents/Addusedproduct";
import ProductCatagory from "../Pages/HomeComponents/ProductCatagory";
import Login from "../Pages/Login/Login";
import Resistation from "../Pages/Login/Resistation";
import MyOrders from "../Pages/MyOrders";
import MyProduct from "../Pages/MyProduct";
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
    {
        path: '/dashboard',
        element: <Dashbord />,
        children: [
            { path: '/dashboard/myproducts', element: <MyProduct /> },
            { path: '/dashboard/myorders', element: <MyOrders /> },


        ]
    },
    { path: '/login', element: <Login /> },
    { path: '/resistation', element: <Resistation /> },
    { path: '*', element: <ErrorPage />, },



])