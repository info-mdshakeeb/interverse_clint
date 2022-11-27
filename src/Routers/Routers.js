import { createBrowserRouter } from "react-router-dom";
import Allbuyers from "../Components/DashboardComponent/Allbuyers";
import Allsellers from "../Components/DashboardComponent/Allsellers";
import ReportedItem from "../Components/DashboardComponent/ReportedItem";
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
import AdminRoutes from "./AdminRoutes";
import SellerRouter from "./SellerRouter";


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
                loader: ({ params }) => fetch(`https://interverse.vercel.app/productcatagory/${params.id}`),
                element: <PrivateRoute><ProductCatagory /></PrivateRoute>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashbord /></PrivateRoute>,
        children: [
            { path: '/dashboard/myproducts', element: <SellerRouter><MyProduct /> </SellerRouter> },
            { path: '/dashboard/myorders', element: <MyOrders /> },
            { path: '/dashboard/addusedproduct', element: <SellerRouter><Addusedproduct /></SellerRouter> },
            { path: '/dashboard/allbuyers', element: <AdminRoutes><Allbuyers /></AdminRoutes> },
            { path: '/dashboard/allsellers', element: <AdminRoutes><Allsellers /></AdminRoutes> },
            { path: '/dashboard/reporteditem', element: <AdminRoutes><ReportedItem /></AdminRoutes> },
        ]
    },
    { path: '/login', element: <Login /> },
    { path: '/resistation', element: <Resistation /> },
    { path: '*', element: <ErrorPage />, },



])