import { createBrowserRouter } from "react-router-dom";
import Dashbord from "../Layout/Dashbord";
import Main from "../Layout/Main";
import Addusedproduct from "../Pages/Addusedproduct";
import Blogs from "../Pages/Blogs";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
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
            { path: '/blogs', element: <Blogs /> },
            {
                path: '/productcatagory/:id',
                loader: ({ params }) => fetch(`http://localhost:2100/productcatagory/${params.id}`),
                element: <PrivateRoute><ProductCatagory /></PrivateRoute>
            },


        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashbord /></PrivateRoute>,
        children: [
            { path: '/dashboard/myproducts', element: <PrivateRoute><MyProduct /></PrivateRoute> },
            { path: '/dashboard/myorders', element: <PrivateRoute><MyOrders /></PrivateRoute> },
            { path: '/dashboard/addusedproduct', element: <PrivateRoute><Addusedproduct /> </PrivateRoute> }


        ]
    },
    { path: '/login', element: <Login /> },
    { path: '/resistation', element: <Resistation /> },
    { path: '*', element: <ErrorPage />, },



])