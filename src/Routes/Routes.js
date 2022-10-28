import { createBrowserRouter } from "react-router-dom";
import SingleCourseFind from "../Component/SingleCourseFind";
import Main from "../layout/Main";
import AllCourses from "../Pages/AllCourses/AllCourses";
import Blog from "../Pages/Blog/Blog";
import CheckOutPage from "../Pages/CheckOutPage/CheckOutPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import FAQ from "../Pages/FAQ/FAQ";
import Home from "../Pages/Home";
import LeftSideBar from "../Pages/LeftSideBar/LeftSideBar";
import Profile from "../Pages/Others/Profile/Profile";
import Login from "../Pages/Shared/Header/Login/Login/Login";
import Register from "../Pages/Shared/Header/Login/Register/Register";
import SingleCourse from "../Pages/SingleCourse/SingleCourse";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "/courses",
        element: <AllCourses></AllCourses>,
        loader: () =>
          fetch("https://courcity-server-assignment10.vercel.app/courses"),
      },

      {
        path: "/singleCourse/:id",
        element: <SingleCourse></SingleCourse>,
        loader: ({ params }) =>
          fetch(
            `https://courcity-server-assignment10.vercel.app/singleCourse/${params.id}`
          ),
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
      {
        path: "/checkOut",
        element: (
          <PrivateRoute>
            <CheckOutPage></CheckOutPage>
          </PrivateRoute>
        ),
      },
    ],
  },
  { path: "*", element: <ErrorPage></ErrorPage> },
]);
