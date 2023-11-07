import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddJobs from "../pages/AddJobs";
import PrivateRoutes from "./PrivateRoutes";
import MyJobs from "../pages/MyJobs";
import UpdateJob from "../pages/UpdateJob";
import JobDetails from "../jobs/JobDetails";
import MyBids from "../pages/MyBids";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
              path: '/',
              element: <Home></Home>
            },
            {
              path: 'login',
              element: <Login></Login>
            },
            {
              path: 'register',
              element: <Register></Register>
            },
            {
              path: 'addjob',
              element: <PrivateRoutes><AddJobs></AddJobs></PrivateRoutes>
            },
            {
              path: 'myjobs',
              element: <PrivateRoutes><MyJobs></MyJobs></PrivateRoutes>
            },
            {
              path: 'myjobs/:id',
              element: <PrivateRoutes><UpdateJob></UpdateJob></PrivateRoutes>,
              loader: ({params}) => fetch(`http://localhost:5000/job/${params.id}`)
            },
            {
              path: 'jobdetails/:id',
              element: <PrivateRoutes><JobDetails></JobDetails></PrivateRoutes>,
              loader: ({params}) => fetch(`http://localhost:5000/jobdetails/${params.id}`)
            },
            {
              path: 'mybids',
              element: <PrivateRoutes><MyBids></MyBids></PrivateRoutes>
            }
          ],
    },
]);

export default router;