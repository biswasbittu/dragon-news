import { createBrowserRouter } from "react-router";
import Root from "../layout/Root/Root";
import Home from "../components/pages/Home/Home";
import Categorynews from "../components/pages/Categorynews/Categorynews";
import Login from "../components/pages/Login/Login";
import Signup from "../components/pages/Signup/Signup";
import Authlayout from "../components/Authlayout/Authlayout";
import Newsdetails from "../components/pages/Newsdetails/Newsdetails";
import PrivateRoute from "../AuthProvider/PrivateRoute";
import Loading from "../components/pages/Loading/Loading";
import Error from "../components/pages/Error/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement:<Error/>,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path:'/category/:id',
        loader: () => fetch("/news.json"),
        Component: Categorynews,
        hydrateFallbackElement: <Loading/>


      },


    ]
  },

  {
    path: '/auth',
    element: <Authlayout />,
    children: [

      {
        path: '/auth/login',
        element: <Login></Login>
      },
      {
        path: '/auth/signup',
        element: <Signup></Signup>
      },

    ]
  },

  {
    path: '/newsdetails/:id',
    loader: () => fetch("/news.json"),
    hydrateFallbackElement: <Loading />,

    element: <PrivateRoute>
      <Newsdetails />
    </PrivateRoute>,
  }
]);