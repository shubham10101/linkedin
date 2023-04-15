import {  createBrowserRouter} from "react-router-dom";
import Homelayout from "../layouts/Homelayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register  from "../pages/Register"



export const router = createBrowserRouter([
    {
      path: "/Login",
      element: <Login/>
    },
    {
      path: "/Register",
      element: <Register/>
    },
    {
      path:"/Home",
      element:<Homelayout/>
    }
])