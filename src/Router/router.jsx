import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import Error from "../Components/Error/Error";
import Dashboard from "../Layout/Dashboard";
import DashboardHome from "../Components/DashboardHome/DashboardHome";
import AddProjects from "../Pages/AddProjects/AddProjects";
import BlogDetails from "../Components/Blogs/BlogDetails";
import Project from "../Pages/Project/Project";
import Resume from "../Pages/Resume/Resume";
import Contact from "../Pages/Contact/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/project/:title",
                element: <Project/>,
                loader: ({params}) => fetch(`https://portfolio-backend-0y27.onrender.com/project/${params.title}`)
            },
            {
                path: "/blogs",
                element: <Blogs/>
            },
            {
                path: '/blogs/:id',
                element: <BlogDetails/>,
                loader: ({params}) => fetch(`https://learner-cafe-server.vercel.app/blogs/${params.id}`)
            },
            {
                path: '/resume',
                element: <Resume/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '*',
                element: <Error/>
            }
        ]
    },
    {
        path: "/dashboard",
        element: <Dashboard/>,
        children: [
            {
                path: "/dashboard",
                element: <DashboardHome/>
            },
            {
                path: "addprojects",
                element: <AddProjects/>
            }
        ]
    }
]);

export default router