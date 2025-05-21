import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import DashBoard from "../layouts/DashBoard";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Cart from "../pages/DashBoard/Cart/cart";

import UserHome from "../pages/DashBoard/MyHome.jsx/UserHome";
import ErrorPage from "../pages/ErrorPage/ErrorPage";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [{
            path: '/',
            element: <Home></Home>
        }, {
            path: 'menu',
            element: <Menu></Menu>
        }, {
            path: `order/:id`,
            element: <Order></Order>
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path: 'signup',
            element: <SignUp></SignUp>
        },]
    },
{
    path:'dashboard',
    element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
        {
            path: 'userHome',
            element:<UserHome></UserHome>
        },
        {
            path: 'cart',
            element:<Cart></Cart>
        },
     
        // adim route
    ]

}

]);