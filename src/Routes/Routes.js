import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AllCourses from "../Pages/AllCourses/AllCourses";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import FAQ from "../Pages/FAQ/FAQ";
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
        path: "/courses",
        element: <AllCourses></AllCourses>,
        loader: () => fetch("http://localhost:5000/courses"),
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
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
        element: <Profile></Profile>,
      },
    ],
  },
  // { path: "*", element: <ErrorPage></ErrorPage> },
]);