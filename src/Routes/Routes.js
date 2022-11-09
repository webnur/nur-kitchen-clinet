import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AddService from "../pages/AddService/AddService";
import Home from "../pages/Home/Home";
import LogIn from "../pages/LogIn/LogIn";
import MyReviews from "../pages/MyReviews/MyReviews";
import Register from "../pages/Register/Register";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import Services from "../pages/Services/Services";


export const routers = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path:'/services',
                element: <Services></Services>
            },
            {
                path:'/serviceDetails/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/serviceDetails/${params.id}`),
            },
            {
                path:'/addService',
                element: <AddService></AddService>
            },
            {
                path: '/myReviews',
                element: <MyReviews></MyReviews>
            }
          
           
        ]
    }
])