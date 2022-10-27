import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home";
import Profile from "../Pages/Others/Profile/Profile";
import Login from "../Pages/Shared/Header/Login/Login/Login";
import Register from "../Pages/Shared/Header/Login/Register/Register";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/profile",
        element: (
           
            <Profile></Profile>
           
        ),
      },
    ],
  },
]);