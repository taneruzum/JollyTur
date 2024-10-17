import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts";
import HomePage from "../Pages/Home";



const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                element: <HomePage />,
                index: true,
            },
            {
                path: '',
                element: "",
            },

        ],

    },

]);
export default router;