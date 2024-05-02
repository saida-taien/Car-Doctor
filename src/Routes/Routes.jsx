import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Page/Home/Home/Home";
import SignUp from "../Page/SignUp/SignUp";
import Login from "../Page/Login/Login";
// import Bookings from "../Page/Bookings/Bookings";
import BookService from "../Page/BookService/BookService";
import Bookings from "../Page/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";


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
        },
        {
          path: 'book/:id', 
          element: <BookService></BookService>, 
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path: '/bookings',
          element : <PrivateRoute><Bookings></Bookings></PrivateRoute>
        }
      ]
    },
  ]);

export default router;