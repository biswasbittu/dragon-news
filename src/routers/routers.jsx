import { createBrowserRouter } from "react-router";
import Home from "../layout/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Home,
  },
]);