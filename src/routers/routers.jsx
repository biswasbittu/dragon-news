import { createBrowserRouter } from "react-router";
import Root from "../layout/Root/Root";
import Home from "../components/pages/Home/Home";
import Categorynews from "../components/pages/Categorynews/Categorynews";
import Login from "../components/pages/Login/Login";
import Signup from "../components/pages/Signup/Signup";
import Authlayout from "../components/Authlayout/Authlayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
      {
         index:true,
         Component:Home
      },
      {
        path:'/category/:id',
        loader: ()=>fetch("/news.json"),
        Component:Categorynews,


      }
    ]
  },

  {
    path:'/auth',
    element: <Authlayout/>,
    children:[
      {
        path:'/auth/login',
        element:<Login></Login>
      },
      {
        path:'/auth/register',
        element:<Signup></Signup>
      }
    ]
  }
]);