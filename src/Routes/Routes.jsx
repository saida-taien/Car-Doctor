import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Page/Home/Home/Home";
import SignUp from "../Page/SignUp/SignUp";
import Login from "../Page/Login/Login";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children : [
        {
            path : '/',
            element : <Home></Home>
        },
        {
          path : '/signUp',
          element : <SignUp></SignUp>
        },
        {
          path : '/login',
          element : <Login></Login>
        }
      ]
    },
  ]);

export default router;