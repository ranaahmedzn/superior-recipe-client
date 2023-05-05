import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ChefRecipes from "../pages/ChefRecipes/ChefRecipes/ChefRecipes";
import PrivateRoute from "./PrivateRoute";
import Terms from "../pages/Terms/Terms";
import BlogPage from "../pages/Blog/BlogPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('https://superior-recipe-server-ranasheikhzn.vercel.app/chefs')
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/chef-recipes/chef/:id',
                element: <PrivateRoute><ChefRecipes /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://superior-recipe-server-ranasheikhzn.vercel.app/chef-recipes/chef/${params.id}`)
            },
            {
                path: '/blog',
                element: <BlogPage />
            }
            // {
            //     path: '*',
            //     element: <ErrorPage />
            // }
        ]
    },
    {
        path: '/terms',
        element: <Terms />
    }
])

export default router;