import { createBrowserRouter } from "react-router";
import Root from "../layout/Root/Root";
import Home from "../components/pages/Home/Home";
import Categorynews from "../components/pages/Categorynews/Categorynews";

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
]);