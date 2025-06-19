import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import DashBoard from "../layouts/DashBoard";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AllUsers from "../pages/DashBoard/AdminPages/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import ContactUs from "../pages/ContactUs/ContactUs";
import UserHome from "../pages/DashBoard/UserPages/UserHome.jsx/UserHome";
import Reservation from "../pages/DashBoard/UserPages/Reservation/Reservation";
import PaymentHistory from "../pages/DashBoard/UserPages/PaymentHistory/PaymentHistory";
import AddReview from "../pages/DashBoard/UserPages/AddReview/AddReview";
import UserBooking from "../pages/DashBoard/UserPages/UserBooking/UserBooking";
import AdminHome from "../pages/DashBoard/AdminPages/AdminHome/AdminHome";
import AddItems from "../pages/DashBoard/AdminPages/AddItems/AddItems";
import ManageItems from "../pages/DashBoard/AdminPages/ManageItems/ManageItems";
import UpdateItems from "../pages/DashBoard/AdminPages/ManageItems/UpdateItems";
import Cart from "../pages/DashBoard/UserPages/Cart/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: `order/:id`,
        element: <Order></Order>,
      },
      {
        path: "contuctus",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashBoard></DashBoard>
      </PrivateRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      // user route
      {
        path: "userHome",
        element: <UserHome></UserHome>,
      },
      {
        path: "reservation",
        element: <Reservation></Reservation>,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: "addreview",
        element: <AddReview></AddReview>,
      },
      {
        path: "userbookin",
        element: <UserBooking></UserBooking>,
      },

      // adim route
      {
        path: "adminHome",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },
      {
        path: "addItems",
        element: (
          <AdminRoute>
            <AddItems></AddItems>
          </AdminRoute>
        ),
      },
      {
        path: "manageItems",
        element: (
          <AdminRoute>
            <ManageItems></ManageItems>
          </AdminRoute>
        ),
      },
      {
        path: "UpdateItems/:id",
        element: (
          <AdminRoute>
            <UpdateItems></UpdateItems>
          </AdminRoute>
        ),
        loader:({params})=>fetch(`https://bistro-boss-server-snowy-one.vercel.app/menus/${params.id}`)
      },
      {
        path: "magnageBookings",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "allusers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
    ],
  },
]);
